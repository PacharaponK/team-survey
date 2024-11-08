import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class Team {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false, unique: true })
    name: string

    @OneToOne(() => User)
    @JoinColumn()
    leader_id: User

    @OneToMany(() => User, (user) => user.team_id)
    members_id: User[]

    @Column({ default: null, type: "datetime" })
    created_at?: Date;

    @Column({ default: null, type: "datetime" })
    updated_at?: Date;
}

