import { Module } from '@nestjs/common';
import { KnightsModule } from './knights/knights.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    KnightsModule,
    MongooseModule.forRoot('mongodb+srv://nestjsdb:nestjsdb@cluster0.sq0r7.mongodb.net/?retryWrites=true&w=majority', {dbName: 'nestjsdb'})
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
