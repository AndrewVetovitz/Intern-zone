import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { UserAccount } from './UserAccount';

@Entity()
export class UserAccountStatus {
    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(type => UserAccount, user => user.user_account_status_id)
    id: string;

    @Column({ length: 20 })
    code: string;

    @Column({ length: 100 })
    name: string;
}
