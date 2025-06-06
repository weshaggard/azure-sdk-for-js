// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how the sendNotification() method can be used to send a direct
 * notification using Firebase Legacy HTTP.  This sends a JSON message to an Firebase given registration ID and returns
 * a Tracking ID which can be used for troubleshooting with the Azure Notification Hubs team.
 *
 * See https://learn.microsoft.com/rest/api/notificationhubs/direct-send
 * to learn about Direct Send.
 *
 *
 * @summary Demonstrates how to send direct notifications using Azure Notification Hubs
 */

require("dotenv/config");
const { createFcmLegacyNotification } = require("@azure/notification-hubs/models");
const {
  createClientContext,
  getNotificationOutcomeDetails,
  sendNotification,
} = require("@azure/notification-hubs/api");
const { delay } = require("@azure/core-util");
const { isRestError } = require("@azure/core-rest-pipeline");

// Define connection string and hub name
const connectionString = process.env.NOTIFICATIONHUBS_CONNECTION_STRING || "<connection string>";
const hubName = process.env.NOTIFICATION_HUB_NAME || "<hub name>";

// Define message constants
const DUMMY_REGISTRATION = "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1";
const gcmRegistrationId = process.env.FCM_REGISTRATION_ID || DUMMY_REGISTRATION;

async function main() {
  const context = createClientContext(connectionString, hubName);

  const messageBody = `{
	"notification":{
		"title":"Notification Hub Test Notification",
		"body":"This is a sample notification delivered by Azure Notification Hubs."
	},
	"data":{
		"property1":"value1",
		"property2":42
	}
}`;

  const notification = createFcmLegacyNotification({
    body: messageBody,
  });

  const result = await sendNotification(context, notification, { deviceHandle: gcmRegistrationId });

  console.log(`Direct send Tracking ID: ${result.trackingId}`);
  console.log(`Direct send Correlation ID: ${result.correlationId}`);

  // Only available in Standard SKU and above
  if (result.notificationId) {
    console.log(`Direct send Notification ID: ${result.notificationId}`);

    const results = await getNotificationDetails(context, result.notificationId);
    if (results) {
      console.log(JSON.stringify(results, null, 2));
    }
  }
}

async function getNotificationDetails(context, notificationId) {
  let state = "Enqueued";
  let count = 0;
  let result;
  while ((state === "Enqueued" || state === "Processing") && count++ < 10) {
    try {
      result = await getNotificationOutcomeDetails(context, notificationId);
      state = result.state;
    } catch (e) {
      // Possible to get 404 for when it doesn't exist yet.
      if (isRestError(e) && e.statusCode === 404) {
        continue;
      } else {
        throw e;
      }
    }

    await delay(1000);
  }

  return result;
}

main().catch((err) => {
  console.log("sendDirectNotification Sample: Error occurred: ", err);
  process.exit(1);
});
