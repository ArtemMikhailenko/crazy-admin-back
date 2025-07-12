import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SiteNumbers, SiteNumbersDocument } from './schemas/site-numbers.schema';
import { UpdateSiteNumbersDto } from './dto/update-numbers.dto';

@Injectable()
export class NumbersService implements OnModuleInit {
  constructor(
    @InjectModel(SiteNumbers.name)
    private siteNumbersModel: Model<SiteNumbersDocument>,
  ) {}

  async onModuleInit() {
    await this.initializeDefaultNumbers();
  }

  private async initializeDefaultNumbers() {
    const existing = await this.siteNumbersModel.findById('site_numbers');
    if (!existing) {
      const defaultNumbers = new this.siteNumbersModel({
        _id: 'site_numbers',
      });
      await defaultNumbers.save();
      console.log('🔢 Инициализированы данные по умолчанию');
    }
  }

  async getNumbers(): Promise<SiteNumbers> {
    let numbers = await this.siteNumbersModel.findById('site_numbers');
    if (!numbers) {
      numbers = new this.siteNumbersModel({ _id: 'site_numbers' });
      await numbers.save();
    }
    return numbers;
  }

  async updateNumbers(updateDto: UpdateSiteNumbersDto): Promise<SiteNumbers> {
    const updated = await this.siteNumbersModel.findByIdAndUpdate(
      'site_numbers',
      { $set: updateDto },
      { new: true, upsert: true }
    );
    return updated;
  }

  async resetToDefaults(): Promise<SiteNumbers> {
    await this.siteNumbersModel.findByIdAndDelete('site_numbers');
    return this.getNumbers();
  }
}
