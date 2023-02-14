import { Module } from '@nestjs/common';
import { KnightsModule } from './knights/knights.module';

@Module({
  imports: [KnightsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
