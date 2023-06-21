import { Module } from '@nestjs/common';
import { HourService } from './hour.service';
import { HourController } from './hour.controller';
import { Hour } from 'src/models/hours.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hour])],
  controllers: [HourController],
  providers: [HourService, Hour]
})
export class HourModule {}
