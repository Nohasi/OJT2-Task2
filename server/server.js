const http = require('http');
const url = require('url');

const invalidRequest = require('./modules/invalidRequest');
const fibonacci = require('./modules/fibonacci');

const port = 4090;

const server = http.createServer((req, res) => {
    // If invalid request is sent sends an error response and returns function
    if(invalidRequest(req, res)){
        return;
    }
    res.writeHead(200, {'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    res.end(`{"sequence": "${fibonacci(url.parse(req.url, true).query.sequenceLength)}"}`);
    return;
});

server.listen(port, '127.0.0.1', () => {
    console.log(`Listening to requests on port ${port}`);
});