import { Customer } from "src/customer/entities/customer.entity";
import { Role } from "src/role/entities/role.entity";
import { Team } from "src/team/entities/team.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";

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

    @Column({ default: null, nullable: true })
    profile_url: string

    @OneToMany(() => Customer, (customer) => customer.dealer)
    customers: Customer[];

    @ManyToOne(() => Role, (role) => role.users)
    role: Role

    @ManyToOne(() => Team, (team) => team.members)
    team: Team

    @CreateDateColumn({ type: "datetime" })
    created_at?: Date;

    @UpdateDateColumn({ type: "datetime" })
    updated_at?: Date;
}

