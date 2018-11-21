import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 256 })
    name: string;

    @Column({ length: 256 })
    email: string;

    @Column({ length: 256 })
    username: string;

    @Column({ length: 256 })
    password: string;
}
