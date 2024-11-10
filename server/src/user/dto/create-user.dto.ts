import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ "message": "Name field cannot be empty" })
    username: string;

    @IsEmail()
    email: string;

    @IsNotEmpty({ "message": "Password field cannot be empty" })
    password: string;

    @IsNotEmpty({ "message": "Firstname field cannot be empty" })
    firstname: string

    @IsNotEmpty({ "message": "Lastname field cannot be empty" })
    lastname: string

}