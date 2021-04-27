/* eslint-disable prettier/prettier */
import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { ScanService } from './scans.service';

@Controller('containers')
export class ScansController {
  // constructor(private readonly scanService: ScanService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('photo', {dest: 'uploads/'}))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  
  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // async upload(@UploadedFile() file: Express.Multer.File): Promise<string>{
  //     await this.scanService.upload(file);
  //     return "picture is being sent"
  // }
}
