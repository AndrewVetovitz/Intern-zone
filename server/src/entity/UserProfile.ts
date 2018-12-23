import { Entity, Column, PrimaryGeneratedColumn, OneToOne, BaseEntity } from 'typeorm';

import { UserAccount } from './UserAccount';

@Entity()
export class UserProfile extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 128 })
    name: string;

    @Column({ length: 128 })
    email: string;

    @OneToOne(type => UserAccount, userAccount => userAccount.id)
    userAccount: UserAccount;

    @Column({ default: false })
    accept_terms_and_service: boolean;
}
