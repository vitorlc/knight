import { Module } from '@nestjs/common';
import { KnightsModule } from './knights/knights.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    KnightsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL, { dbName: process.env.DATABASE_NAME }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
