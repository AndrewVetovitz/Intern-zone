import { Entity, OneToOne, Column } from 'typeorm';

import { UserAccount } from './UserAccount';

@Entity()
export class LinkdlnAccount {
    @OneToOne(type => UserAccount, user => user.id)
    userId: UserAccount;

    @Column({ length: 30 })
    linkdlnId: string;
}