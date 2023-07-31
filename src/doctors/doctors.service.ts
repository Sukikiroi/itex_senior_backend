import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import {Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class DoctorsService {

  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
  ) {}



  create(createDoctorDto: CreateDoctorDto) {
    const doctor = new Doctor()
    const user = new User()
    user.email = createDoctorDto.email
    user.name = createDoctorDto.name
    user.type = createDoctorDto.type
    user.password = createDoctorDto.password
    doctor.specialization = createDoctorDto.specialization
    doctor.user = user;
    this.doctorRepository.save(doctor);
    const {password, ...result }=user
    return result
  }

  findAll() {
    return `This action returns all doctors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doctor`;
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
