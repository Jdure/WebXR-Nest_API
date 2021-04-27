/* eslint-disable prettier/prettier */
import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { Injectable } from "@nestjs/common";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Injectable()
export class ScanService {
  azureConnect = process.env.AZURE_STORAGE_CONNECTION_STRING;
  containerName = process.env.AZURE_CONTAINER_NAME;

   getBlobClient(fileName:string):BlockBlobClient{
    const blobClientService = BlobServiceClient.fromConnectionString(this.azureConnect);
    const containerClient = blobClientService.getContainerClient(this.containerName);
    const blobClient = containerClient.getBlockBlobClient(fileName);
    return blobClient;
  }

   async upload(file:Express.Multer.File){
       console.log(file.originalname);
      const blobClient = this.getBlobClient(file.originalname);
      await blobClient.uploadData(file.buffer);
   }

}