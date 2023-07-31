import { ApiProperty } from "@nestjs/swagger"
import { Appointment } from "src/appointments/entities/appointment.entity"
import { MedicalHistory } from "src/medical_historys/entities/medical_history.entity"
import { Prescription } from "src/prescriptions/entities/prescription.entity"
import { User } from "src/users/entities/user.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Doctor {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number


    @ApiProperty()
    @Column()
    specialization: string


    @ApiProperty()
    @OneToOne(() => User, { eager: true, cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    user: User

    @ApiProperty()
    @OneToMany(() => Appointment, (appointment) => appointment.doctor)
    appointments: Appointment[]



    @ApiProperty()
    @OneToMany(() => Prescription, (prescription) => prescription.doctor)
    prescriptions: Prescription[]


    @OneToMany(() => MedicalHistory, (medical_history) => medical_history.doctor)
    medical_historys: MedicalHistory[]


    @CreateDateColumn()
    created_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;
}
