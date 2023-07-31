import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findOne(email);
    const isMatch = await bcryptjs.compareSync(pass, user?.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.name, type: user.type, userID: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}