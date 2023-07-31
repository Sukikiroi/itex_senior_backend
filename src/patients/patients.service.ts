import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PatientsService {

  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) { }


  create(createPatientDto: CreatePatientDto) {
    const user = new User()
    user.email = createPatientDto.email
    user.name = createPatientDto.name
    user.type = createPatientDto.type
    user.password = createPatientDto.password

    const patient = new Patient()
    patient.address = createPatientDto.address
    patient.date_birth = createPatientDto.date_birth
    patient.user = user

  
    this.patientRepository.save(patient);
    const {password, ...result }=user
    return result
  }

 findAll() {

    return this.patientRepository.find({ relations: { user: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return this.patientRepository.update(id,updatePatientDto);
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
