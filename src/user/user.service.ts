import { Injectable } from '@nestjs/common';
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
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneOrFail({
      where: {
          id: id,
      },
  });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepo.findOneOrFail({
      where: {
          id: id,
      },
    });
    this.userRepo.update({ id: +id }, updateUserDto);
    return await this.userRepo.findOne({
      where: {
          id: id,
      },
    });
  }
}
