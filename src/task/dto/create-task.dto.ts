import {  IsEmpty, IsEnum, IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateTaskDTO {

    @IsString()
    @IsNotEmpty()
    title: string;

    
    @IsString()
    description: string;

    @IsOptional()
    @IsEnum(["PENDING","IN-PROGRESS","DONE"], {
        message: "Valid Status Required"
    })
    status: 'PENDING' | 'IN-PROGRESS' | 'DONE';
}
