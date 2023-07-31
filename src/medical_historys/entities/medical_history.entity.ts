import { ApiProperty } from "@nestjs/swagger";
import { Doctor } from "src/doctors/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class MedicalHistory {
  /**
   * Medical History
   */
    @PrimaryGeneratedColumn()
    id: Number;

    @ApiProperty({ example: 1, description: 'The diagnosis of the Patient' })
    @Column()
    diagnosis: string;

    @ApiProperty({ example: 1, description: 'The treatment of the Patient' })
    @Column()
    treatment: string;

    
    @Column()
    notes: string;

    @ApiProperty({ example: 1, description: 'The patient of the treatment' })
    @ManyToOne(() => Patient, (patient) => patient.medical_historys)
    patient: Patient


    @ApiProperty({ example: 1, description: 'The doctor of the treatment' })
    @ManyToOne(() => Doctor, (doctor) => doctor.medical_historys)
    doctor: Doctor
}
