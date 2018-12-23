import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';

import { UserAccount } from './UserAccount';

@Entity()
export class UserAccountStatus extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(type => UserAccount, userAccount => userAccount.userAccountStatus)
    id: string[];

    @Column({ length: 20 })
    code: string;

    @Column({ length: 100 })
    name: string;
}
