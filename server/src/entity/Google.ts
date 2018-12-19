import { Entity, OneToOne, Column, PrimaryColumn, BaseEntity } from 'typeorm';

import { UserProfile } from './UserProfile';

@Entity()
export class GoogleAccount extends BaseEntity {
    @PrimaryColumn()
    @OneToOne(type => UserProfile, user => user.id)
    userId: string;

    @Column({ length: 30 })
    googleId: string;
}