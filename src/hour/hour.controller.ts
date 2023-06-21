import { Controller, Get, Post, Body, Param, UseGuards, Put } from '@nestjs/common';
import { HourService } from './hour.service';
import { CreateHourDto } from './dto/create-hour.dto';
import { UpdateHourDto } from './dto/update-hour.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/hour')
export class HourController {
  constructor(private readonly hourService: HourService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createHourDto: CreateHourDto) {
    return this.hourService.create(createHourDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.hourService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hourService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id') id: string, @Body() updateHourDto: UpdateHourDto) {
    return this.hourService.update(+id, updateHourDto);
  }
}
