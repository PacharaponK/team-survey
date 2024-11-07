import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password?: string;

    @Column({ default: null, type: "datetime" })
    created_at?: Date;

    @Column({ default: null, type: "datetime" })
    updated_at?: Date;
}

