import { IsNotEmpty, IsEmail } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateTeamDto {
    @IsNotEmpty({ "message": "Name field cannot be empty" })
    name: string; 

    leader: User;

    members: number[]
}