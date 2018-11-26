import errorHandler from 'errorhandler';
import app from './app';
import spdy from 'spdy';
import fs from 'fs';

const options = {
    key: fs.readFileSync(__dirname + '/../certificate/server.key'),
    cert: fs.readFileSync(__dirname + '/../certificate/server.crt')
};

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

const port: number = app.get('port');
const env: string = app.get('env');

/**
 * Start Spdy Express server.
 */

const server = spdy.createServer(options, app).listen(port, (err: any) => {
    if (err) {
        throw new Error(err);
    }

    console.log('  App is running at https://localhost:%d in %s mode', port, env);
    console.log('  Press CTRL-C to stop\n');
});

export default server;
