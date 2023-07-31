import { ApiProperty } from "@nestjs/swagger";
import { Doctor } from "src/doctors/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity()
export class Prescription {

    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty({ example: "paracitamole", description: 'The medication of the Prescription' })
    @Column()
    medication:string

    @ApiProperty({ example: 1, description: 'The dosage of the Prescription' })
    @Column()
    dosage:string


    @ApiProperty({ example: 3, description: 'The frequency of the Prescription' })
      @Column()
      frequency:string

      @ApiProperty({ example: "2023-31-07", description: 'The start date  of the Prescription' })
      @Column()
      start:Date;

      @ApiProperty({ example: "2023-1-08", description: 'The end date  of the Prescription' })
      @Column()
      end:Date;

      @ApiProperty({ example: 1, description: 'The Patient ID   of the Prescription' })
      @ManyToOne(() => Patient, (patient) => patient.prescriptions)
      patient: Patient
  
      @ApiProperty({ example:1, description: 'The Doctor ID   of the Prescription' })
      @ManyToOne(() => Doctor, (doctor) => doctor.prescriptions)
      doctor: Doctor


      @CreateDateColumn()
      created_at: Date;
   
      @UpdateDateColumn()
      updated_at: Date;
}
