import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from 'src/models/user.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>){

  }
  create(createUserDto: CreateUserDto) {
    try {      
      const user = this.userRepo.create(createUserDto);
      return this.userRepo.save(user)
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findAll() {
    return this.userRepo.find({select:['id', 'name', 'email']});
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({
      select:['id', 'name', 'email'],
      where: {
          id: id,
      },
    });
    
    if(!user) throw new NotFoundException;

    return user;
  }

  findByLogin(login: string) {
    try {
      return this.userRepo.findOneOrFail({
        where: {
          login: login,
        },
    });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne( id );
    this.userRepo.merge(user, updateUserDto);
    return await this.userRepo.save(user);
  }
}
