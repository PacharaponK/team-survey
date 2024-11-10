import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    firstname: string

    @Column({ nullable: false })
    lastname: string

    @Column({ default: null })
    address: string

    @Column({ default: null, unique: true })
    identification_number: string

    @Column({ default: null, nullable: true })
    phone_number: string

    @Column({ default: null, nullable: true })
    profile_url: string

    @Column({ default: null })
    status: string

    @ManyToOne(() => User, (user) => user.customers)
    dealer: User

    @CreateDateColumn({ type: "datetime" })
    created_at?: Date;

    @UpdateDateColumn({ type: "datetime" })
    updated_at?: Date;
}

