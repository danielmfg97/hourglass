import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Project } from "./project.model";
import { User } from "./user.model";

@Entity({name: 'hours'})
export class Hour {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    project_id: number;

    @Column({ nullable: false })
    user_id: number;

    @Column({type: 'timestamp'})
    started_at: Date;

    @Column({type: 'timestamp'})
    ended_at: Date;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
}
