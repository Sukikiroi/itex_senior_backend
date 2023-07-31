import { ApiProperty } from "@nestjs/swagger";


export class auth {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}