import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
}
