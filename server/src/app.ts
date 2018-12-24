import 'reflect-metadata';

import http from 'http';
import express, { Request, Response, NextFunction } from 'express';
// import fs from 'fs';

import socket from 'socket.io';

// Middleware
import passport from 'passport';
import dotenv from 'dotenv';
import cors from 'cors';
import compression from 'compression';  // compresses requests
import session from 'express-session';
import bodyParser from 'body-parser';
import logger from 'morgan';
import expressValidator from 'express-validator';
import helmet from 'helmet'; // Basic security

// Database import
import { createConnection } from 'typeorm';

// Mailer service
import MailerService from './helpers/mailer';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env' });

// Validator
import validate from './helpers/validator';

// Controllers
import * as companyController from './controllers/company';
import * as authController from './controllers/auth';
import * as userController from './controllers/user';

// Configure passport
require('./config/passport')(passport);

// Create Express server
const app = express();

// const options = {
//     key: fs.readFileSync(__dirname + '/../certificate/server.key'),
//     cert: fs.readFileSync(__dirname + '/../certificate/server.crt')
// };

// const server = https.createServer(options, app);
const server = http.createServer(app);
const io = socket.listen(server);

const addSocketIdToSession = (req: Request, res: Response, next: NextFunction) => {
    req.session.socketId = req.query.socketId;
    next();
};

// Connect to MySql
createConnection().then(() => {
    console.log('connected to db');
}).catch(err => {
    console.log('error creating db');
    console.log(err);

    process.exit(1);
});

/**
 * Everything included for development
 */
if (process.env.environment !== 'production') {
    const errorHandler = require('errorhandler');

    app.use(errorHandler());
}

// // Express configuration
app.set('http', 'http');
app.set('port', process.env.PORT || 5000);
app.set('io', io);
app.set('mailService', new MailerService());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(logger('dev'));
app.use(cors());
app.use(expressValidator());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

const localAuth = passport.authenticate('local');
const githubAuth = passport.authenticate('github');
const googleAuth = passport.authenticate('google', { scope: ['profile'] });
const linkedinAuth = passport.authenticate('linkedin');
const facebookAuth = passport.authenticate('facebook');

/**
 * Primary app routes.
 */
app.get('/api/company/all', companyController.getAllCompanyNames);
app.get('/api/company/:name', companyController.getCompanyByName);

/**
 * Authentication routes
 */
app.get('/api/authenticate/local', localAuth);
app.get('/api/authenticate/local/callback', localAuth);

app.get('/api/authenticate/github', addSocketIdToSession, githubAuth);
app.get('/api/authenticate/github/callback', githubAuth, authController.github);

app.get('/api/authenticate/google', addSocketIdToSession, googleAuth);
app.get('/api/authenticate/google/callback', googleAuth, authController.google);

app.get('/api/authenticate/linkedin', addSocketIdToSession, linkedinAuth);
app.get('/api/authenticate/linkedin/callback', linkedinAuth, authController.linkedin);

app.get('/api/authenticate/facebook', addSocketIdToSession, facebookAuth);
app.get('/api/authenticate/facebook/callback', facebookAuth, authController.facebook);

/**
 * User routes
 */
app.post('/api/user/signup', validate('signup'), userController.postSignUpUser);

export { app };
export default server;
