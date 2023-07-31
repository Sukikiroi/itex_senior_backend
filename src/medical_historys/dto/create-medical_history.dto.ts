import { ApiProperty } from "@nestjs/swagger";
import { Doctor } from "src/doctors/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity";

export class CreateMedicalHistoryDto {
    @ApiProperty()
    diagnosis:string;

    @ApiProperty()
    treatment:string;

    @ApiProperty()
    notes:string;

    @ApiProperty()
    patient:Patient;


    @ApiProperty()
    doctor:Doctor;
}
