import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, BaseEntity } from 'typeorm';

import { Company } from './Company';
import { JobPositionHistory } from './JobPositionHistory';

@Entity()
export class JobPosition extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 256 })
    name: string;

    @Column({ length: 512 })
    link: string;

    @Column({ length: 64 })
    location: string;

    @Column({ default: false })
    status: boolean;

    @Column({ length: 32 })
    type: string;

    @ManyToOne(type => Company, company => company.jobPositions)
    company: Company;

    @OneToMany(type => JobPositionHistory, jobPositionHistory => jobPositionHistory.jobPosition)
    jobPositionsHistory: JobPositionHistory[];
}
