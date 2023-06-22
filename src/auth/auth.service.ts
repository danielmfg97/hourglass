import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user) {
    const payload = { sub: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(login: string, password: string) {
    let user: User;
    try {
      user = await this.userService.findByLogin(login);
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password)

    if(!isPasswordValid) return null;

    return user;
  }
}
