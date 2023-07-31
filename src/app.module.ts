import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';
import { MedicalHistorysModule } from './medical_historys/medical_historys.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/database';
import { MedicationsModule } from './medications/medications.module';
import { RolesModule } from './roles/roles.module';
import { CaslModule } from './casl/casl.module';
import { APP_GUARD } from '@nestjs/core';
import { PoliciesGuard } from './common/guards/policies.guard';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot(),DoctorsModule, PatientsModule, AppointmentsModule, PrescriptionsModule, MedicalHistorysModule, AuthModule, UsersModule, TypeOrmModule.forRoot(dbConfig()), MedicationsModule, RolesModule, CaslModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
