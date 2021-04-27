/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScansController } from './features/scans/scans.controller';
import { ScanService } from './features/scans/scans.service';

@Module({
  controllers: [AppController, ScansController],
  providers: [AppService, ScanService],
  imports: [],
})
export class AppModule {}
