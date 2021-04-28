/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScansController } from './features/scans/scans.controller';
import { ScanService } from './features/scans/scans.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [AppController, ScansController],
  providers: [AppService, ScanService],
  imports: [MulterModule.register({
    dest: './files',
  })],
})
export class AppModule {}
