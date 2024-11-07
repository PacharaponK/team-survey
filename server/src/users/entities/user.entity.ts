import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number

    @Column()
    firstname: string;

    @Column()
    lastname: string;
}

