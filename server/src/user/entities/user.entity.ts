import { Customer } from "src/customer/entities/customer.entity";
import { Role } from "src/role/entities/role.entity";
import { Team } from "src/team/entities/team.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true, nullable: false })
    username: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password?: string;

    @Column({ default: null })
    firstname: string

    @Column({ default: null })
    lastname: string

    @Column({ default: null, nullable: true })
    phone_number: string

    @OneToMany(() => Customer, (customer) => customer.dealer_id)
    customers_id: Customer[];

    @ManyToOne(() => Role, (role) => role.users_id)
    role_id: Role

    @ManyToOne(() => Team, (team) => team.members_id)
    team_id: Team

    @Column({ default: null, type: "datetime" })
    created_at?: Date;

    @Column({ default: null, type: "datetime" })
    updated_at?: Date;
}

