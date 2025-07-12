import { Controller, Get, Patch, Body, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NumbersService } from './numbers.service';
import { UpdateSiteNumbersDto } from './dto/update-numbers.dto';
import { SiteNumbers } from './schemas/site-numbers.schema';

@ApiTags('numbers')
@Controller('api/numbers')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все числовые данные сайта' })
  @ApiResponse({ 
    status: 200, 
    description: 'Числовые данные получены успешно',
    type: SiteNumbers 
  })
  async getNumbers(): Promise<SiteNumbers> {
    return this.numbersService.getNumbers();
  }

  @Patch()
  @ApiOperation({ summary: 'Обновить числовые данные сайта' })
  @ApiResponse({ 
    status: 200, 
    description: 'Числовые данные обновлены успешно',
    type: SiteNumbers 
  })
  async updateNumbers(
    @Body() updateDto: UpdateSiteNumbersDto
  ): Promise<SiteNumbers> {
    return this.numbersService.updateNumbers(updateDto);
  }

  @Post('reset')
  @ApiOperation({ summary: 'Сбросить все данные к значениям по умолчанию' })
  @ApiResponse({ 
    status: 200, 
    description: 'Данные сброшены к значениям по умолчанию',
    type: SiteNumbers 
  })
  async resetToDefaults(): Promise<SiteNumbers> {
    return this.numbersService.resetToDefaults();
  }
}