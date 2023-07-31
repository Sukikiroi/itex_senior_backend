import { Doctor } from "src/doctors/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Appointment {

    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn() 
    date: Date; // Creation date

    @Column({ type: 'datetime' }) 
    time:Date;

    @Column()
    reason:string;

    @ManyToOne(() => Patient, (patient) => patient.appointments)
    patient: Patient

    @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
    doctor: Doctor

}
