// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Displays the follow up communication of the Radiology Insights request.
 */
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

import AzureHealthInsightsClient, {
  ClinicalDocumentTypeEnum,
  CreateJobParameters,
  RadiologyInsightsJobOutput,
  getLongRunningPoller,
  isUnexpected
} from "../src/index.js";
// You will need to set this environment variables or edit the following values

const endpoint = process.env["HEALTH_INSIGHTS_ENDPOINT"] || "";

/**
    * Print the follow up communication inference
 */

function printResults(radiologyInsightsResult: RadiologyInsightsJobOutput): void {
  if (radiologyInsightsResult.status === "succeeded") {
    const results = radiologyInsightsResult.result;
    if (results !== undefined) {
      results.patientResults.forEach((patientResult: any) => {
        patientResult.inferences.forEach((inference: { kind: string; communicatedAt: any[]; recipient: any[]; wasAcknowledged: string; }) => {
          if (inference.kind === "followupCommunication") {
            console.log("Followup Communication Inference found");
            if ("communicatedAt" in inference) {
              console.log("Communicated at: " + inference.communicatedAt.join(" "));
            }
            if ("recipient" in inference) {
              console.log("Recipient: " + inference.recipient.join(" "));
            }
            console.log("   Aknowledged: " + inference.wasAcknowledged);
          }
        });
      });
    }
  } else {
    const error = radiologyInsightsResult.error;
    if (error) {
      console.log(error.code, ":", error.message);
    }
  }

}


// Create request body for radiology insights
function createRequestBody(): CreateJobParameters {

  const codingData = {
    system: "Http://hl7.org/fhir/ValueSet/cpt-all",
    code: "USPELVIS",
    display: "US PELVIS COMPLETE"
  };

  const code = {
    coding: [codingData]
  };

  const patientInfo = {
    sex: "female",
    birthDate: new Date("1959-11-11T19:00:00+00:00"),
  };

  const encounterData = {
    id: "encounterid1",
    period: {
      "start": "2021-8-28T00:00:00",
      "end": "2021-8-28T00:00:00"
    },
    class: "inpatient"
  };

  const authorData = {
    id: "authorid1",
    fullName: "authorname1",
  };

  const orderedProceduresData = {
    code: code,
    description: "US PELVIS COMPLETE"
  };

  const administrativeMetadata = {
    orderedProcedures: [orderedProceduresData],
    encounterId: "encounterid1"
  };

  const content = {
    sourceType: "inline",
    value: `CLINICAL HISTORY:
  20-year-old female presenting with abdominal pain. Surgical history significant for appendectomy.

  COMPARISON:
  Right upper quadrant sonographic performed 1 day prior.

  TECHNIQUE:
  Transabdominal grayscale pelvic sonography with duplex color Doppler
  and spectral waveform analysis of the ovaries.

  FINDINGS:
  The uterus is unremarkable given the transabdominal technique with
  endometrial echo complex within physiologic normal limits. The
  ovaries are symmetric in size, measuring 2.5 x 1.2 x 3.0 cm and the
  left measuring 2.8 x 1.5 x 1.9 cm.

  On duplex imaging, Doppler signal is symmetric.

  IMPRESSION:
  1. Normal pelvic sonography. Findings of testicular torsion.
  A new US pelvis within the next 6 months is recommended.

  These results have been discussed with Dr. Jones at 3 PM on November 5 2020.`
  };

  const patientDocumentData = {
    type: "note",
    clinicalType: ClinicalDocumentTypeEnum.RadiologyReport,
    id: "docid1",
    language: "en",
    authors: [authorData],
    specialtyType: "radiology",
    administrativeMetadata: administrativeMetadata,
    content: content,
    createdAt: new Date("2021-05-31T16:00:00.000Z"),
    orderedProceduresAsCsv: "US PELVIS COMPLETE"
  };


  const patientData = {
    id: "Samantha Jones",
    details: patientInfo,
    encounters: [encounterData],
    patientDocuments: [patientDocumentData]
  };

  const inferenceTypes = [
    "finding",
    "ageMismatch",
    "lateralityDiscrepancy",
    "sexMismatch",
    "completeOrderDiscrepancy",
    "limitedOrderDiscrepancy",
    "criticalResult",
    "criticalRecommendation",
    "followupRecommendation",
    "followupCommunication",
    "radiologyProcedure"];

  const followupRecommendationOptions = {
    includeRecommendationsWithNoSpecifiedModality: true,
    includeRecommendationsInReferences: true,
    provideFocusedSentenceEvidence: true
  };

  const findingOptions = {
    provideFocusedSentenceEvidence: true
  };

  const inferenceOptions = {
    followupRecommendationOptions: followupRecommendationOptions,
    findingOptions: findingOptions
  };

  // Create RI Configuration
  const configuration = {
    inferenceOptions: inferenceOptions,
    inferenceTypes: inferenceTypes,
    locale: "en-US",
    verbose: false,
    includeEvidence: true
  };

  // create RI Data
  const RadiologyInsightsJob = {
    jobData: {
      patients: [patientData],
      configuration: configuration,
    }
  };

  return {
    body: RadiologyInsightsJob,
  };

}

export async function main(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = AzureHealthInsightsClient(endpoint, credential);

  // Create request body
  const radiologyInsightsParameter = createRequestBody();

  // Initiate radiology insights job and retrieve results
  const dateString = Date.now();
  const jobID = "jobId-" + dateString;
  const initialResponse = await client.path("/radiology-insights/jobs/{id}", jobID).put(radiologyInsightsParameter);
  if (isUnexpected(initialResponse)) {
    throw initialResponse;
  }
  const poller = await getLongRunningPoller(client, initialResponse);
  const RadiologyInsightsResult = await poller.pollUntilDone();
  if (isUnexpected(RadiologyInsightsResult)) {
    throw RadiologyInsightsResult;
  }
  const resultBody = RadiologyInsightsResult.body;
  printResults(resultBody);
}

main().catch((err) => {
  console.error("The follow up communication encountered an error:", err);
});
