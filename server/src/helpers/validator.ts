import { body } from 'express-validator/check';

import { UserProfile } from '../entity/UserProfile';

const validate = (method: string) => {
    switch (method) {
        case 'signup': {
            console.log('signup validation');
            return [
                body('name')
                    .exists().withMessage('Name must exist')
                    .matches('^[a-zA-Z]+( [a-zA-Z]+)*$').withMessage('Invalid name input'),
                body('email')
                    .exists().withMessage('Email must exist')
                    .isEmail().withMessage('Invalid email')
                    .custom((value) => {
                        return new Promise((resolve, reject) => {
                            UserProfile.createQueryBuilder().where('email = :value', { value }).execute().then((response: any) => {
                                console.log('Response      ', response);
                                if (response.length === 0) {
                                    resolve(true);
                                } else {
                                    reject(new Error('User already exists'));
                                }
                            }).catch((err: Error) => {
                                reject(new Error('Server Error'));
                            });
                        });
                    }).withMessage('Server Error'),
                body('password')
                    .exists().withMessage('Password must exist'),
                body('confirmPassword')
                    .exists().withMessage('ConfirmPassword must exist')
                    .custom((value, { req }) => value === req.body.password).withMessage('ConfirmPassword must equal Password'),
            ];
        }
    }
};

export default validate;