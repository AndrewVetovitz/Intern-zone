import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { JobPosition } from './JobPosition';

@Entity()
export class JobPositionHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('integer')
    year: number;

    @Column()
    openDate: Date;

    @Column()
    closeDate: Date;

    @Column()
    @ManyToOne(type => JobPosition, jobPosition => jobPosition.jobPositionsHistory)
    jobPosition: JobPosition;
}
