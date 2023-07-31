import { ApiProperty } from "@nestjs/swagger";
import { Doctor } from "src/doctors/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Appointment {

    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty({ example: 1, description: 'The date of the appointment' })
    @CreateDateColumn() 
    date: Date; // Creation date


    @ApiProperty({ example: 1, description: 'The time of the appointment' })
    @Column({ type: 'datetime' }) 
    time:Date;


    @ApiProperty({ example: 1, description: 'The reason of the appointment' })
    @Column()
    reason:string;


    @ApiProperty({ example: 1, description: 'The patient of the appointment' })
    @ManyToOne(() => Patient, (patient) => patient.appointments)
    patient: Patient


    @ApiProperty({ example: 1, description: 'The doctor of the appointment' })
    @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
    doctor: Doctor


    @CreateDateColumn()
    created_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;

}
