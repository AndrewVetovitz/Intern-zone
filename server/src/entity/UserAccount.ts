import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { UserAccountStatus } from './UserAccountStatus';

@Entity()
export class UserAccount {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 128 })
    name: string;

    @Column({ length: 256 })
    email: string;

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

    @Column()
    @ManyToOne(type => UserAccountStatus, userAccountStatus => userAccountStatus.id)
    user_account_status_id: UserAccountStatus;

    @Column({ length: 100, nullable: true })
    password_reminder_token: string;

    @Column({ nullable: true })
    password_reminder_expire: Date;
}
