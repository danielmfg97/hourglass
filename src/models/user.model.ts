import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"
import { hashSync } from 'bcrypt'

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

    @BeforeInsert()
    hashPassword(){
      this.password = hashSync(this.password, 10)
    }
}
