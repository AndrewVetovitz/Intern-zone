import 'reflect-metadata';

import http from 'http';
// import fs from 'fs';

import socket from 'socket.io';

// const options = {
//     key: fs.readFileSync(__dirname + '/../certificate/server.key'),
//     cert: fs.readFileSync(__dirname + '/../certificate/server.crt')
// };

import express from 'express';

import passport from 'passport';
import dotenv from 'dotenv';
import cors from 'cors';
// import compression from 'compression';  // compresses requests
import session from 'express-session';
// import bodyParser from 'body-parser';
import logger from 'morgan';
// import lusca from 'lusca';
// import flash from 'express-flash';
// import path from 'path';
// import expressValidator from 'express-validator';
// import bluebird from 'bluebird';

import { Request, Response, NextFunction } from 'express';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env' });

// Database import
import { createConnection } from 'typeorm';

// Controllers
import * as companyController from './controllers/company';
import * as authController from './controllers/auth';

import errorHandler from 'errorhandler'; // REMOVE FOR PRODUCTION

require('./config/passport')(passport);

// Create Express server
const app = express();

// const server = https.createServer(options, app);
const server =  http.createServer(app);
const io = socket.listen(server);

const addSocketIdToSession = (req: Request, res: Response, next: NextFunction) => {
    req.session.socketId = req.query.socketId;
    next();
};

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

// Connect to MySql
createConnection().then(() => {
    console.log('connected to db');
}).catch(err => {
    console.log('error creating db');
    console.log(err);
});

// // Express configuration
app.set('http', 'http');
app.set('port', process.env.PORT || 5000);
app.set('io', io);

// app.use(compression());
app.use(logger('dev'));

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(expressValidator());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

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
app.get('/api/authenticate/github', addSocketIdToSession, githubAuth);
app.get('/api/authenticate/github/callback', githubAuth, authController.github);

app.get('/api/authenticate/google', addSocketIdToSession, googleAuth);
app.get('/api/authenticate/google/callback', googleAuth, authController.google);

app.get('/api/authenticate/linkedin', addSocketIdToSession, linkedinAuth);
app.get('/api/authenticate/linkedin/callback', linkedinAuth, authController.linkedin);

app.get('/api/authenticate/facebook', addSocketIdToSession, facebookAuth);
app.get('/api/authenticate/facebook/callback', facebookAuth, authController.facebook);

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

export { app };
export default server;