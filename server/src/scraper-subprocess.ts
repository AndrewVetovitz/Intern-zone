const spawn = require('child_process').spawn;
const pythonProcess = spawn('python3', ['../scraper/main.py']);

console.log('scraper node started');

pythonProcess.stdout.on('data', function (data: any) {
    console.log(data.toString());
});

pythonProcess.stderr.on('data', function (data: any) {
    console.log('stderr: ' + data.toString('utf8'));
});
