import { Entity, Column, PrimaryGeneratedColumn, OneToOne, BaseEntity, OneToMany } from 'typeorm';

import { UserAccountStatus } from './UserAccountStatus';
import { UserProfile } from './UserProfile';

@Entity()
export class UserAccount extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 128 })
    username: string;

    @Column({ length: 128 })
    password_hashed: string;

    @Column({ length: 50, nullable: true })
    password_salt: string;

    @Column({ length: 50 })
    password_hash_algorithm: string;

    @Column()
    registration_time: Date;

    @Column({ length: 100, nullable: true })
    email_conformation_token: string;

    @OneToMany(type => UserAccountStatus, userAccountStatus => userAccountStatus.id)
    userAccountStatus: UserAccountStatus;

    @OneToOne(type => UserProfile, userProfile => userProfile.id)
    userProfile: UserProfile;

    @Column({ length: 100, nullable: true })
    password_reminder_token: string;

    @Column({ nullable: true })
    password_reminder_expire: Date;
}
