import { Doctor } from "src/doctors/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity";

export class CreateAppointmentDto {
    date: Date;
    time: Date;
    reason: string
    patient: Patient;
    doctor: Doctor
}
