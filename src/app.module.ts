/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosModule } from './photos/photos.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PhotosModule],
})
export class AppModule {}
