import server, { app } from './app';

const port: number = app.get('port');
const env: string = app.get('env');
const http: string = app.get('http');

/**
 * Start sockerIO, Express server.
 */
server.listen(port, (err: any) => {
    if (err) {
        throw new Error(err);
    }

    console.log('  App is running at %s://localhost:%d in %s mode', http, port, env);
    console.log('  Press CTRL-C to stop\n');
});

export default server;
