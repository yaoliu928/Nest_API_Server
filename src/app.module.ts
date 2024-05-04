import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NingasModule } from './ningas/ningas.module';

@Module({
  imports: [NingasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
