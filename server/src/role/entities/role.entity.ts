import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string

    @OneToMany(() => User, (user) => user.role_id)
    users_id: User[]
}

