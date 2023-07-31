import { Controller, Post,Body } from '@nestjs/common';
import { UsersDTO } from './dto/create-user.dto';

import { UsersService } from './users.service';
@Controller('users')
export class UserController {
    constructor(private readonly userssService: UsersService) {}


  @Post()
  create(@Body() createUserDto: UsersDTO) {
    return this.userssService.create(createUserDto);
  }

}