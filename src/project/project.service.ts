import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../models/project.model';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(Project)
    private projectRepo: Repository<Project>){}

  create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepo.create(createProjectDto);
    return this.projectRepo.save(project)
  }

  findAll() {
    return this.projectRepo.find();
  }

  async findOne(id: number) {
    const project = await this.projectRepo.findOne({
      where: {
          id: id,
      },
    });
    
    console.log(project)
    if(!project) throw new NotFoundException
    
    return project;    
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.findOne( id );
    this.projectRepo.merge(project, updateProjectDto);
    return await this.projectRepo.save(project);
  }
}
