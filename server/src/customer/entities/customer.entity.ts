import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";

export enum customerStatus {
    HIGH = "high",
    MEDIUM = "medium",
    LOW = "low",
}

@Entity()
export class Customer {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    firstname: string

    @Column({ nullable: false })
    lastname: string

    @Column({ default: null })
    province: string

    @Column({ default: null })
    district: string

    @Column({ default: null })
    sub_district: string

    @Column({ default: null })
    zip_code: string

    @Column({ default: null, unique: true })
    identification_number: string

    @Column({ default: null, nullable: true })
    phone_number: string

    @Column({ default: null, nullable: true })
    profile_url: string

    @Column({ type: 'text', default: customerStatus.MEDIUM })
    status: customerStatus

    @ManyToOne(() => User, (user) => user.customers)
    dealer: User

    @CreateDateColumn({ type: "datetime" })
    created_at?: Date;

    @UpdateDateColumn({ type: "datetime" })
    updated_at?: Date;
}

