import {  IsEmpty, IsEnum, IsString, IsNotEmpty } from "class-validator";

export class CreateTaskDTO {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;

    @IsEnum(["PENDING","IN-PROGRESS","DONE"], {
        message: "Valid Status Required"
    })
    status: 'PENDING' | 'IN-PROGRESS' | 'DONE';
}
