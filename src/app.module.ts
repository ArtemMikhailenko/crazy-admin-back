import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NumbersModule } from './numbers/numbers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb+srv://artemlend:1234@cluster0.38f7t.mongodb.net/'
    ),
    NumbersModule,
  ],
})
export class AppModule {}