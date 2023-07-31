import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { CaslModule } from 'src/casl/casl.module';
import { APP_GUARD } from '@nestjs/core';
import { PoliciesGuard } from 'src/common/guards/policies.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment]),CaslModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService]
})
export class AppointmentsModule {}
