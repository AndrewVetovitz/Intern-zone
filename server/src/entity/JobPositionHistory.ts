import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';

import { JobPosition } from './JobPosition';

@Entity()
export class JobPositionHistory extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('integer')
    year: number;

    @Column()
    openDate: Date;

    @Column()
    closeDate: Date;

    @ManyToOne(type => JobPosition, jobPosition => jobPosition.jobPositionsHistory)
    jobPosition: JobPosition;
}
