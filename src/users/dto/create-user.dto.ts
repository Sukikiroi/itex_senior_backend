import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UsersDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  name: string;

  @IsNotEmpty()
  @IsString()
  type?: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}