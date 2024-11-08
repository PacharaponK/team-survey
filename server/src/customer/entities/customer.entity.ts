import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    firstname: string

    @Column({ nullable: false })
    lastname: string

    @Column()
    age: number

    @Column({ default: null, nullable: true })
    phone_number: string

    @ManyToOne(() => User, (user) => user.customers)
    dealer_id: User

    @Column({ default: null, type: "datetime" })
    created_at?: Date;

    @Column({ default: null, type: "datetime" })
    updated_at?: Date;
}

