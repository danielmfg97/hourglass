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

  findOne(id: number) {   
    try {
      return this.hourRepo.findOneOrFail({
        where: {
            id: id,
        },
      })
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateHourDto: UpdateHourDto) {
    const project = await this.findOne( id );
    this.hourRepo.merge(project, updateHourDto);
    return await this.hourRepo.save(project);
  }
}
