import { Request, Response } from 'express';

import MailerService from '../helpers/mailer';

import { UserAccount } from '../entity/UserAccount';
import { UserProfile } from '../entity/UserProfile';

import bcrypt from 'bcrypt-nodejs';

/**
 * POST /api/user/signup
 * Signup user
 */
const postSignUpUser = (req: Request, res: Response) => {
    const errors = req.validationErrors();

    if (errors) {
        return res.status(422).json({ errors });
    } else {
        const { firstName, lastName, email, password, passwordAgain } = req.body;
        const name = firstName + ' ' + lastName;

        console.log({ name, email, password, passwordAgain });

        // bcrypt.genSalt(10, ((err: Error, salt: string) => {
        //     bcrypt.hash(password, salt, ((err: Error, hash: string) => {
        //         // Store hash in your password DB.
        //     }));
        // }));

        // const mailer: MailerService = req.app.get('mailService');

        // mailer.sendEmail('hello new user', name);
        // const userAccount = UserAccount.create({
        //     password_hashed: '',
        //     password_salt: '',
        //     password_hash_algorithm: '',
        //     registration_time: '',
        //     email_conformation_token: '',
        // });

        // const userProfile = UserProfile.create({
        //     name: name,
        //     email: email,
        //     userAccount: userAccount
        // });

        // userAccount.userProfile = userProfile;

        res.status(200).json({ response: 'new user' });
    }
};

export { postSignUpUser };
