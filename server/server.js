const http = require('http');
const url = require('url');
const port = 4090;

const validateRequest = (req, res) => {
    // Using the incorrect path in url
    if (url.parse(req.url).pathname != '/fibonacci'){
        res.writeHead(406, {'Content-type': 'application/json'});
        res.end('{"error": "Incorrect Pathname"}');
        console.log('{"error": "Incorrect Pathname"}');
        return true;
    }

    // Method needs to be POST to get data from user
    if (req.method != 'POST'){
        res.writeHead(406, {'Content-type': 'application/json'});
        res.end('{"error": "Incorrect API Request"}');
        console.log('{"error": "Incorrect API Request"}');
        return true;
    }
    return false;

}

const fibonacci = (sequenceLength) => {
    if (sequenceLength <= 1){return sequenceLength;}
    const sequence = [0, 1];
    for (let i = 2; i <= sequenceLength; i++){
        sequence[i] = sequence[i-2] + sequence[i-1];
    }
    return sequence;

}

const server = http.createServer((req, res) => {
    // If invalid request is sent sends an error response and returns function
    if(validateRequest(req, res)){
        return;
    }

});

server.listen(port, '127.0.0.1', () => {
    console.log(`Listening to requests on port ${port}`);
});