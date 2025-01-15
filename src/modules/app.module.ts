import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { DownloadModule } from './download/download.module';

@Module({
  imports: [DownloadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
