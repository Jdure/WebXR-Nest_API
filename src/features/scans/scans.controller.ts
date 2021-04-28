/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { ScanService } from './scans.service';

@Controller('containers')
export class ScansController {

  @Get()
  getContainers(): string {
    return 'All the containers live here'
  }

}
