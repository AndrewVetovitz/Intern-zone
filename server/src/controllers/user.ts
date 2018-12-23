import { Request, Response } from 'express';

import MailerService from '../helpers/mailer';

// import { UserAccount } from '../entity/UserAccount';
import { UserProfile } from '../entity/UserProfile';

/**
 * POST /api/user/signup
 * Signup user
 */
const postSignUpUser = (req: Request, res: Response) => {
    req.checkBody('name', 'Name must exist').exists();
    req.checkBody('email', 'Email must exist').exists();
    req.checkBody('password', 'Password must exist').exists();
    req.checkBody('confirmPassword', 'confirmPassword must exist').exists();

    req.checkBody('email', 'Invalid email address').isEmail();
    req.checkBody('name', 'Valid name inputed').isAlpha();
    req.checkBody('confirmPassword', 'confirmPassword field must have the same value as the password field')
        .equals(req.body.password);

    const errors = req.validationErrors();

    if (errors) {
        return res.status(422).json({ errors });
    } else {
        const { name, email, password, passwordAgain } = req.body;

        console.log({ name, email, password, passwordAgain });

        UserProfile.createQueryBuilder().where('email = :email', { email }).execute().then((response: any) => {
            if (response.length === 0) {
                const mailer: MailerService = req.app.get('mailService');

                mailer.sendEmail('hello new user', name);
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
            } else {
                res.status(422).json({
                    errors: [
                        {
                            'location': 'body',
                            'param': 'email',
                            'msg': 'Email already in use'
                        }
                    ]
                });
            }
        }).catch((err: Error) => {
            console.log(err);
        });
    }
};

export { postSignUpUser };
