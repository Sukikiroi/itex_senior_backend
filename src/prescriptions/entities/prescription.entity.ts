import { Doctor } from "src/doctors/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Prescription {

    @PrimaryGeneratedColumn()
    id:number;


    @Column()
    medication:string

    @Column()
    dosage:string


      @Column()
      frequency:string


      @Column()
      start:Date;

      @Column()
      end:Date;

      @ManyToOne(() => Patient, (patient) => patient.prescriptions)
      patient: Patient
  
      @ManyToOne(() => Doctor, (doctor) => doctor.prescriptions)
      doctor: Doctor
}
