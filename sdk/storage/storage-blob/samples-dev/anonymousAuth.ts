// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary authenticate anonymously using a SAS-encoded URL
 * @azsdk-weight 85
 */

import { BlobServiceClient, AnonymousCredential } from "@azure/storage-blob";

// Load the .env file if it exists
import "dotenv/config";

async function main(): Promise<void> {
  // Enter your storage account name and SAS
  const account = process.env.ACCOUNT_NAME || "<account name>";
  const accountSas = process.env.ACCOUNT_SAS || "<account SAS>";

  // List containers
  const blobServiceClient = new BlobServiceClient(
    // When using AnonymousCredential, following url should include a valid SAS or support public access
    `https://${account}.blob.core.windows.net${accountSas}`,
    new AnonymousCredential(),
  );

  console.log("Containers:");
  for await (const container of blobServiceClient.listContainers()) {
    console.log(`- ${container.name}`);
  }

  // Create a container
  const containerName = `newcontainer${new Date().getTime()}`;
  const containerClient = blobServiceClient.getContainerClient(containerName);

  const createContainerResponse = await containerClient.create();
  console.log(`Created container ${containerName} successfully`, createContainerResponse.requestId);

  // Delete container
  await containerClient.delete();

  console.log("Deleted container:", containerClient.containerName);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
