import { Entity, OneToOne, Column } from 'typeorm';

import { User } from './User';

@Entity()
export class GoogleAccount {
    @OneToOne(type => User, user => user.id)
    userId: User;

    @Column({ length: 30 })
    googleId: string;
}