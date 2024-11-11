import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Team {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false, unique: true })
    name: string

    @OneToOne(() => User)
    @JoinColumn()
    leader_id: User

    @OneToMany(() => User, (user) => user.team)
    members_id: User[]

    @CreateDateColumn({ type: "datetime" })
    created_at?: Date;

    @UpdateDateColumn({ type: "datetime" })
    updated_at?: Date;
}

