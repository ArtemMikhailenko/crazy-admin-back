import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NumbersController } from './numbers.controller';
import { NumbersService } from './numbers.service';
import { SiteNumbers, SiteNumbersSchema } from './schemas/site-numbers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SiteNumbers.name, schema: SiteNumbersSchema }
    ]),
  ],
  controllers: [NumbersController],
  providers: [NumbersService],
  exports: [NumbersService],
})
export class NumbersModule {}