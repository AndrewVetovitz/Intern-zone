import { Entity, OneToOne, Column } from 'typeorm';

import { UserAccount } from './UserAccount';

@Entity()
export class GithubAccount {
    @OneToOne(type => UserAccount, user => user.id)
    userId: UserAccount;

    @Column({ length: 30 })
    githubId: string;
}