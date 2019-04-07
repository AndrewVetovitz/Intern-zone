import { body } from 'express-validator/check';

import { UserProfile } from '../entity/UserProfile';

const validate = (method: string) => {
    switch (method) {
        case 'signup': {
            return [
                body('firstName')
                    .exists().withMessage('First name must exist')
                    .isLength({ min: 1 }).withMessage('Minimum first name length of 1')
                    .matches('^[a-zA-Z]+( [a-zA-Z]+)*$').withMessage('Invalid first name input'),
                body('lastName')
                    .exists().withMessage('Last name must exist')
                    .isLength({ min: 1 }).withMessage('Minimum last name length of 1')
                    .matches('^[a-zA-Z]+( [a-zA-Z]+)*$').withMessage('Invalid last name input'),
                body('email')
                    .exists().withMessage('Email must exist')
                    .isEmail().withMessage('Invalid email')
                    .custom((value) => {
                        return new Promise((resolve, reject) => {
                            UserProfile.createQueryBuilder().where('email = :value', { value }).execute().then((response: any) => {
                                // User does not exist true
                                if (response.length === 0) {
                                    resolve(true);
                                } else {
                                    reject(new Error('User already exists'));
                                }
                            }).catch((err: Error) => {
                                reject(new Error('Server Error'));
                            });
                        });
                    }),
                body('password')
                    .exists().withMessage('Password must exist')
                    .isLength({ min: 6 }).withMessage('Minimum password length of 6'),
                body('confirmPassword')
                    .exists().withMessage('ConfirmPassword must exist')
                    .custom((value, { req }) => value === req.body.password).withMessage('ConfirmPassword must equal Password'),
            ];
        }
        case 'utility': {
            return [
                body('email')
                    .exists().withMessage('Email must exist')
                    .isEmail().withMessage('Invalid email')
                    .custom((value) => {
                        return new Promise((resolve, reject) => {
                            UserProfile.createQueryBuilder().where('email = :value', { value }).execute().then((response: any) => {
                                // User exists true
                                if (response.length !== 0) {
                                    resolve(true);
                                } else {
                                    reject(new Error('User does not exist'));
                                }
                            }).catch((err: Error) => {
                                reject(new Error(err + 'Server Error'));
                            });
                        });
                    })
            ];
        }
    }
};

export default validate;
