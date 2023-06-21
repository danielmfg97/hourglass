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

  findOne(id: number) {
    try {
      return this.projectRepo.findOneOrFail({
        where: {
            id: id,
        },
    });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.findOne( id );
    this.projectRepo.merge(project, updateProjectDto);
    return await this.projectRepo.save(project);
  }
}
