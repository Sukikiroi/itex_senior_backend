import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersDTO } from './dto/create-user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}



  async create(createUserDto: UsersDTO): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.type = createUserDto.type;
    user.email = createUserDto.email;
    user.password = createUserDto.password
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }


  async findOne(email: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { email: email }
    });
  }

 
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}