import { Request, Response, NextFunction } from 'express';

import _ from 'lodash';

import { Profile, PassportStatic } from 'passport';
// import passportLocal from 'passport-local';
import passportGitub from 'passport-github';
import passportGoogle from 'passport-google-oauth';
import passportFacebook from 'passport-facebook';

// const LocalStrategy = passportLocal.Strategy;
const GitHubStrategy = passportGitub.Strategy;
const GoogleStrategy = passportGoogle.OAuth2Strategy;
const FacebookStrategy = passportFacebook.Strategy;

interface GithubProfile {
    id: string;
    displayName: string;
    username: string;
    profileUrl: string;
    emails: [
        {
            value: string;
        }
    ];
    photos: object[];
    provider: string;
}

module.exports = (passport: PassportStatic) => {
    // serialize user object
    passport.serializeUser<any, any>((user, done) => {
        done(undefined, user);
    });

    // deserialize user object
    passport.deserializeUser((user, done) => {
        done(undefined, user);
    });

    /*
     * Sign in with Github
     */
    passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: 'http://localhost:5000/api/authenticate/github/callback'
    }, (accessToken: string, refreshToken: string, profile: any, done: (error: any, user?: any) => void) => {
        const prof: GithubProfile = profile;

        // console.log(prof);

        const user: object = {
            'name': prof.displayName,
            'username': prof.username,
            'email': prof.emails[0].value,
        };

        done(undefined, user);
    }
    ));

    /*
     *  Sign in with Google
     */
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:5000/api/authenticate/google/callback'
    }, (accessToken: string, refreshToken: string, profile: any, done: (error: any, user?: any) => void) => {
        // const prof: any = profile;

        console.log(profile);

        // const user: object = {
        //     'name': prof.displayName,
        //     'username': prof.username,
        //     'email': prof.emails[0].value,
        // };

        done(undefined, profile);
    }
    ));

    /*
     *  Sign in with Facebook
     */
    // passport.use(new FacebookStrategy({
    //     clientID: process.env.FACEBOOK_CLIENT_ID,
    //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    //     callbackURL: 'http://localhost:5000/api/authenticate/facebook/callback'
    // }, (accessToken: string, refreshToken: string, profile: any, done: (error: any, user?: any) => void) => {
    //     // const prof: any = profile;

    //     console.log(profile);

    //     // const user: object = {
    //     //     'name': prof.displayName,
    //     //     'username': prof.username,
    //     //     'email': prof.emails[0].value,
    //     // };

    //     done(undefined, profile);
    // }
    // ));
};

/**
 * Sign in using Email and Password.
 */
// passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//     User.findOne({ email: email.toLowerCase() }, (err, user: any) => {
//         if (err) { return done(err); }
//         if (!user) {
//             return done(undefined, false, { message: `Email ${email} not found.` });
//         }
//         user.comparePassword(password, (err: Error, isMatch: boolean) => {
//             if (err) { return done(err); }
//             if (isMatch) {
//                 return done(undefined, user);
//             }
//             return done(undefined, false, { message: 'Invalid email or password.' });
//         });
//     });
// }));

/**
 * Login Required middleware.
 */
const isAuthenticate = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

/**
 * Authorization Required middleware.
 */
const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
    const provider = req.path.split('/').slice(-1)[0];

    if (_.find(req.user.tokens, { kind: provider })) {
        next();
    } else {
        res.redirect(`/api/authenticate/${provider}`);
    }
};



