import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHourDto } from './dto/create-hour.dto';
import { UpdateHourDto } from './dto/update-hour.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hour } from '../models/hours.model';
import { Repository } from 'typeorm';

@Injectable()
export class HourService {
  
  constructor(
    @InjectRepository(Hour)
    private hourRepo: Repository<Hour>){}

  create(createHourDto: CreateHourDto) {
    const hourLog = this.hourRepo.create(createHourDto);
    return this.hourRepo.save(hourLog)
  }

  findAll() {
    return this.hourRepo.find();
  }

  async findOne(id: number) {       
    const timeLog = await this.hourRepo.findOne({
      where: {
          id: id,
      },
    })

    if(!timeLog) throw new NotFoundException();

    return timeLog
    
  }

  async update(id: number, updateHourDto: UpdateHourDto) {
    const timeLog = await this.findOne( id );
    this.hourRepo.merge(timeLog, updateHourDto);
    return await this.hourRepo.save(timeLog);
  }
}
