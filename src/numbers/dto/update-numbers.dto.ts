import { IsString, IsNumber, IsOptional, ValidateNested, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class HeroNumbersDto {
  @ApiProperty({ example: '1,000,000,000', description: 'Общее предложение токенов' })
  @IsOptional()
  @IsString()
  totalSupply?: string;

  @ApiProperty({ example: '$0.001', description: 'Текущая цена токена' })
  @IsOptional()
  @IsString()
  currentPrice?: string;

  @ApiProperty({ example: '$500,000', description: 'Рыночная капитализация' })
  @IsOptional()
  @IsString()
  marketCap?: string;

  @ApiProperty({ example: '2,500+', description: 'Количество держателей' })
  @IsOptional()
  @IsString()
  holders?: string;
}

class TokenProgressionNumbersDto {
  @ApiProperty({ example: '$0.005' })
  @IsOptional()
  @IsString()
  stage1?: string;

  @ApiProperty({ example: '$0.006' })
  @IsOptional()
  @IsString()
  stage2?: string;

  @ApiProperty({ example: '$0.007' })
  @IsOptional()
  @IsString()
  stage3?: string;

  @ApiProperty({ example: '$0.008' })
  @IsOptional()
  @IsString()
  stage4?: string;

  @ApiProperty({ example: '$0.009' })
  @IsOptional()
  @IsString()
  stage5?: string;

  @ApiProperty({ example: '$0.01' })
  @IsOptional()
  @IsString()
  stage6?: string;

  @ApiProperty({ example: 1, description: 'Текущий этап (1-6)' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(6)
  currentStage?: number;
}

class PartnersNumbersDto {
  @ApiProperty({ example: '15+' })
  @IsOptional()
  @IsString()
  partnersCount?: string;

  @ApiProperty({ example: '7' })
  @IsOptional()
  @IsString()
  categories?: string;

  @ApiProperty({ example: '50M+' })
  @IsOptional()
  @IsString()
  transactions?: string;

  @ApiProperty({ example: '99.9%' })
  @IsOptional()
  @IsString()
  uptime?: string;
}

class CommunityNumbersDto {
  @ApiProperty({ example: '90,000+' })
  @IsOptional()
  @IsString()
  activeMembers?: string;

  @ApiProperty({ example: '50,000+' })
  @IsOptional()
  @IsString()
  telegram?: string;

  @ApiProperty({ example: '25,000+' })
  @IsOptional()
  @IsString()
  twitter?: string;

  @ApiProperty({ example: '15,000+' })
  @IsOptional()
  @IsString()
  tiktok?: string;

  @ApiProperty({ example: '100+' })
  @IsOptional()
  @IsString()
  countries?: string;

  @ApiProperty({ example: '1M+' })
  @IsOptional()
  @IsString()
  messages?: string;
}

class TokenomicsNumbersDto {
  @ApiProperty({ example: 55, description: 'Процент для пресейла' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  presalePercentage?: number;

  @ApiProperty({ example: 10 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  listingPercentage?: number;

  @ApiProperty({ example: 15 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  marketingPercentage?: number;

  @ApiProperty({ example: 10 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  developmentPercentage?: number;

  @ApiProperty({ example: 10 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  teamPercentage?: number;
}

class RoadmapNumbersDto {
  @ApiProperty({ example: '15M' })
  @IsOptional()
  @IsString()
  launchTokens?: string;

  @ApiProperty({ example: '25M' })
  @IsOptional()
  @IsString()
  communityTokens?: string;

  @ApiProperty({ example: '35M' })
  @IsOptional()
  @IsString()
  marketingTokens?: string;

  @ApiProperty({ example: '45M' })
  @IsOptional()
  @IsString()
  partnershipTokens?: string;

  @ApiProperty({ example: '55M' })
  @IsOptional()
  @IsString()
  stakingTokens?: string;

  @ApiProperty({ example: '25M' })
  @IsOptional()
  @IsString()
  moonbaseTokens?: string;

  @ApiProperty({ example: 1, description: 'Текущая фаза (1-6)' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(6)
  currentPhase?: number;
}

class PresaleNumbersDto {
  @ApiProperty({ example: '60000', description: 'Токенов за 1 BNB' })
  @IsOptional()
  @IsString()
  tokensPerBnb?: string;

  @ApiProperty({ example: '$0.005', description: 'Текущая цена токена' })
  @IsOptional()
  @IsString()
  currentPrice?: string;

  @ApiProperty({ example: '$0.006', description: 'Следующая цена токена' })
  @IsOptional()
  @IsString()
  nextPrice?: string;

  @ApiProperty({ example: '38.5', description: 'Прогресс в процентах' })
  @IsOptional()
  @IsString()
  progressPercentage?: string;

  @ApiProperty({ example: '$389,000', description: 'Собранная сумма' })
  @IsOptional()
  @IsString()
  raisedAmount?: string;

  @ApiProperty({ example: '$1,000,000', description: 'Целевая сумма' })
  @IsOptional()
  @IsString()
  targetAmount?: string;

  @ApiProperty({ example: 'Stage 2', description: 'Текущий этап' })
  @IsOptional()
  @IsString()
  currentStage?: string;

  @ApiProperty({ example: '2025-09-18T00:00:00.000Z', description: 'Дата окончания' })
  @IsOptional()
  @IsString()
  endDate?: string;
}

class FooterNumbersDto {
  @ApiProperty({ example: '150+', description: 'Обслуживаемые страны' })
  @IsOptional()
  @IsString()
  countriesServed?: string;

  @ApiProperty({ example: '500K+', description: 'Участники сообщества' })
  @IsOptional()
  @IsString()
  communityMembers?: string;

  @ApiProperty({ example: '24/7', description: 'Доступность поддержки' })
  @IsOptional()
  @IsString()
  supportAvailability?: string;

  @ApiProperty({ example: '99.9%', description: 'Время работы системы' })
  @IsOptional()
  @IsString()
  systemUptime?: string;

  @ApiProperty({ example: '50+', description: 'Участники команды' })
  @IsOptional()
  @IsString()
  teamMembers?: string;

  @ApiProperty({ example: '2024', description: 'Год основания' })
  @IsOptional()
  @IsString()
  foundedYear?: string;
}

export class UpdateSiteNumbersDto {
  @ApiProperty({ type: HeroNumbersDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => HeroNumbersDto)
  hero?: HeroNumbersDto;

  @ApiProperty({ type: TokenProgressionNumbersDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => TokenProgressionNumbersDto)
  tokenProgression?: TokenProgressionNumbersDto;

  @ApiProperty({ type: PartnersNumbersDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => PartnersNumbersDto)
  partners?: PartnersNumbersDto;

  @ApiProperty({ type: CommunityNumbersDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CommunityNumbersDto)
  community?: CommunityNumbersDto;

  @ApiProperty({ type: TokenomicsNumbersDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => TokenomicsNumbersDto)
  tokenomics?: TokenomicsNumbersDto;

  @ApiProperty({ type: RoadmapNumbersDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => RoadmapNumbersDto)
  roadmap?: RoadmapNumbersDto;

  @ApiProperty({ type: PresaleNumbersDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => PresaleNumbersDto)
  presale?: PresaleNumbersDto;

  @ApiProperty({ type: FooterNumbersDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => FooterNumbersDto)
  footer?: FooterNumbersDto;
}
