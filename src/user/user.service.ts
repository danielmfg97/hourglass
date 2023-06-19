import { Injectable, NotFoundException } from '@nestjs/common';
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
    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user)
  }

  findAll() {
    return this.userRepo.find({select:['id', 'name', 'email']});
  }

  findOne(id: number) {
    try {
      return this.userRepo.findOneOrFail({
        select:['id', 'name', 'email'],
        where: {
            id: id,
        },
    });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
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
