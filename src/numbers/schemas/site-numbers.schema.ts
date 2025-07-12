import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SiteNumbersDocument = SiteNumbers & Document;

class HeroNumbers {
  @Prop({ default: '1,000,000,000' })
  totalSupply: string;

  @Prop({ default: '$0.001' })
  currentPrice: string;

  @Prop({ default: '$500,000' })
  marketCap: string;

  @Prop({ default: '2,500+' })
  holders: string;
}

class TokenProgressionNumbers {
  @Prop({ default: '$0.005' })
  stage1: string;

  @Prop({ default: '$0.006' })
  stage2: string;

  @Prop({ default: '$0.007' })
  stage3: string;

  @Prop({ default: '$0.008' })
  stage4: string;

  @Prop({ default: '$0.009' })
  stage5: string;

  @Prop({ default: '$0.01' })
  stage6: string;

  @Prop({ default: 1 })
  currentStage: number;
}

class PartnersNumbers {
  @Prop({ default: '15+' })
  partnersCount: string;

  @Prop({ default: '7' })
  categories: string;

  @Prop({ default: '50M+' })
  transactions: string;

  @Prop({ default: '99.9%' })
  uptime: string;
}

class CommunityNumbers {
  @Prop({ default: '90,000+' })
  activeMembers: string;

  @Prop({ default: '50,000+' })
  telegram: string;

  @Prop({ default: '25,000+' })
  twitter: string;

  @Prop({ default: '15,000+' })
  tiktok: string;

  @Prop({ default: '100+' })
  countries: string;

  @Prop({ default: '1M+' })
  messages: string;
}

class TokenomicsNumbers {
  @Prop({ default: 55 })
  presalePercentage: number;

  @Prop({ default: 10 })
  listingPercentage: number;

  @Prop({ default: 15 })
  marketingPercentage: number;

  @Prop({ default: 10 })
  developmentPercentage: number;

  @Prop({ default: 10 })
  teamPercentage: number;
}

class RoadmapNumbers {
  @Prop({ default: '15M' })
  launchTokens: string;

  @Prop({ default: '25M' })
  communityTokens: string;

  @Prop({ default: '35M' })
  marketingTokens: string;

  @Prop({ default: '45M' })
  partnershipTokens: string;

  @Prop({ default: '55M' })
  stakingTokens: string;

  @Prop({ default: '25M' })
  moonbaseTokens: string;

  @Prop({ default: 1 })
  currentPhase: number;
}

class PresaleNumbers {
  @Prop({ default: '60000' })
  tokensPerBnb: string;

  @Prop({ default: '$0.005' })
  currentPrice: string;

  @Prop({ default: '$0.006' })
  nextPrice: string;

  @Prop({ default: '38.5' })
  progressPercentage: string;

  @Prop({ default: '$389,000' })
  raisedAmount: string;

  @Prop({ default: '$1,000,000' })
  targetAmount: string;

  @Prop({ default: 'Stage 2' })
  currentStage: string;

  @Prop({ default: '2025-09-18T00:00:00.000Z' })
  endDate: string;
}

class FooterNumbers {
  @Prop({ default: '150+' })
  countriesServed: string;

  @Prop({ default: '500K+' })
  communityMembers: string;

  @Prop({ default: '24/7' })
  supportAvailability: string;

  @Prop({ default: '99.9%' })
  systemUptime: string;

  @Prop({ default: '50+' })
  teamMembers: string;

  @Prop({ default: '2024' })
  foundedYear: string;
}

@Schema({ timestamps: true })
export class SiteNumbers {
  @Prop({ default: 'site_numbers' })
  _id: string;

  @Prop({ type: HeroNumbers, default: () => ({}) })
  hero: HeroNumbers;

  @Prop({ type: TokenProgressionNumbers, default: () => ({}) })
  tokenProgression: TokenProgressionNumbers;

  @Prop({ type: PartnersNumbers, default: () => ({}) })
  partners: PartnersNumbers;

  @Prop({ type: CommunityNumbers, default: () => ({}) })
  community: CommunityNumbers;

  @Prop({ type: TokenomicsNumbers, default: () => ({}) })
  tokenomics: TokenomicsNumbers;

  @Prop({ type: RoadmapNumbers, default: () => ({}) })
  roadmap: RoadmapNumbers;

  @Prop({ type: PresaleNumbers, default: () => ({}) })
  presale: PresaleNumbers;

  @Prop({ type: FooterNumbers, default: () => ({}) })
  footer: FooterNumbers;
}

export const SiteNumbersSchema = SchemaFactory.createForClass(SiteNumbers);
