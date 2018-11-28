import 'reflect-metadata';

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import compression from 'compression';  // compresses requests
// import session from 'express-session';
// import bodyParser from 'body-parser';
import logger from 'morgan';
// import lusca from 'lusca';
// import flash from 'express-flash';
// import path from 'path';
// import passport from 'passport';
// import expressValidator from 'express-validator';
// import bluebird from 'bluebird';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env' });

import db, { initalize } from './database';

// Controllers (route handlers)
import * as companyController from './controllers/company';

// // API keys and Passport configuration
// import * as passportConfig from './config/passport';

// Create Express server
const app = express();

// Connect to MySql
db.connect((err) => {
    if (err) {
        console.log('MySql connection error. Make sure MySql is running. ' + err);
        process.exit();
    }

    console.log('Connected to mysql!');

    initalize((err) => {
        if (err) {
            console.log('Failed to initalize. ' + err);
            process.exit();
        }
    });

    console.log('Database initalized!');
});

// // Express configuration
app.set('port', process.env.PORT || 5000);
// app.set('views', path.join(__dirname, '../views'));
// app.set('view engine', 'pug');
// app.use(compression());
app.use(logger('dev'));
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(expressValidator());
// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: process.env.SESSION_SECRET,
//   store: new MongoStore({
//     url: mongoUrl,
//     autoReconnect: true
//   })
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
// app.use(lusca.xframe('SAMEORIGIN'));
// app.use(lusca.xssProtection(true));
// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });
// app.use((req, res, next) => {
//   // After successful login, redirect back to the intended page
//   if (!req.user &&
//     req.path !== '/login' &&
//     req.path !== '/signup' &&
//     !req.path.match(/^\/auth/) &&
//     !req.path.match(/\./)) {
//     req.session.returnTo = req.path;
//   } else if (req.user &&
//     req.path == '/account') {
//     req.session.returnTo = req.path;
//   }
//   next();
// });

// app.use(
//   express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
// );

// /**
//  * Primary app routes.
//  */
app.get('/api/company/all', companyController.getAllCompanyNames);

// /**
//  * API examples routes.
//  */
// app.get('/api', apiController.getApi);
// app.get('/api/facebook', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);

// /**
//  * OAuth authentication routes. (Sign in)
//  */
// app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
// app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });

export default app;