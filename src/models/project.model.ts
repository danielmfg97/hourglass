import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'projects'})
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column('simple-array', { nullable: true })
    user_id: number[];

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
}
