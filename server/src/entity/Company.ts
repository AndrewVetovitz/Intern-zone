import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { JobPosition } from './JobPosition';

@Entity()
export class Company {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 64 })
    name: string;

    @Column({ length: 2048 })
    description: string;

    @Column({ length: 512 })
    websiteLink: string;

    @Column({ length: 512 })
    wikipediaLink: string;

    @Column({ default: 0 })
    viewCount: number;

    @Column()
    @OneToMany(type => JobPosition, jobPosition => jobPosition.company)
    jobPositions: JobPosition[];
}
