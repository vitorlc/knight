import { Module } from '@nestjs/common';
import { KnightsService } from './knights.service';
import { KnightsController } from './knights.controller';

@Module({
  controllers: [KnightsController],
  providers: [KnightsService]
})
export class KnightsModule {}
