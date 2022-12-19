const http = require('http');

const invalidRequest = require('./modules/invalidRequest');
const invalidData = require('./modules/invalidData');
const fibonacci = require('./modules/fibonacci');
const port = 4090;

const server = http.createServer((req, res) => {
    // If invalid request is sent sends an error response and returns function
    if(invalidRequest(req, res)){
        return;
    }

    let body = '';
    console.log('Incoming POST Request');
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        let postedData = JSON.parse(body);
        // If bad/invalid data is passed, returns an error response
        if(invalidData(postedData, res)){
            return;
        }
        res.writeHead(406, {'Content-type': 'application/json'});
        res.end(`{"sequence": "${fibonacci(postedData.sequenceLength)}"}`);
        return;
    })

});

server.listen(port, '127.0.0.1', () => {
    console.log(`Listening to requests on port ${port}`);
});