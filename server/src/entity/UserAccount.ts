import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, BaseEntity } from 'typeorm';

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

    @Column({ length: 50, nullable: true})
    password_salt: string;

    @Column({ length: 50 })
    password_hash_algorithm: string;

    @Column()
    registration_time: Date;

    @Column({ length: 100, nullable: true })
    email_conformation_token: string;

    @ManyToOne(type => UserAccountStatus, userAccountStatus => userAccountStatus.id)
    user_account_status_id: UserAccountStatus;

    @OneToOne(type => UserProfile, userProfile => userProfile.id)

    @Column({ length: 100, nullable: true })
    password_reminder_token: string;

    @Column({ nullable: true })
    password_reminder_expire: Date;
}
