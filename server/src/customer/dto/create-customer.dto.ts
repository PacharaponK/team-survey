import { IsNotEmpty } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateCustomerDto {
    @IsNotEmpty({ "message": "Firstname field cannot be empty" })
    firstname: string

    @IsNotEmpty({ "message": "Lastname field cannot be empty" })
    lastname: string

    @IsNotEmpty({ "message": "Identification number field cannot be empty" })
    identification_number: string

    @IsNotEmpty({ message: "Dealer ID cannot be empty" })
    dealer: User;
}