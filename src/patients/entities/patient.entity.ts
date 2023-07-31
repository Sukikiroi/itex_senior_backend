import { Appointment } from "src/appointments/entities/appointment.entity";
import { MedicalHistory } from "src/medical_historys/entities/medical_history.entity";
import { Prescription } from "src/prescriptions/entities/prescription.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ type: 'date' }) 
    date_birth:Date;

    @Column()
    address:string;

    @OneToOne(() => User, { eager: true, cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    user: User


    @OneToMany(() => Appointment, (appointment) => appointment.patient)
    appointments: Appointment[]

    @OneToMany(() => Prescription, (prescription) => prescription.patient)
    prescriptions: Prescription[]


    @OneToMany(() => MedicalHistory, (medical_history) => medical_history.patient)
    medical_historys: MedicalHistory[]


}
