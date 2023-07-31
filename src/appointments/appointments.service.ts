import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppointmentsService {

  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
  ) { }

  
  create(createAppointmentDto: CreateAppointmentDto) {
    const appointment= new Appointment()
    appointment.date=createAppointmentDto.date
    appointment.time=createAppointmentDto.time
    appointment.doctor=createAppointmentDto.doctor
    appointment.patient=createAppointmentDto.patient
    appointment.reason=createAppointmentDto.reason
  
    return this.appointmentRepository.save(appointment)
  }
 
  async findAll():Promise<Appointment[]> {
    const result = await this.appointmentRepository.find({relations:{'patient':true}})
    return result
  }

  findOne(id: number) {
    return this.appointmentRepository.findOne({where:{id:id},relations:{'patient':true}})
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return this.appointmentRepository.delete({id:id})
    
  }
}
