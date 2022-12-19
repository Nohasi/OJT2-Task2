const url = require('url');

// Function to make sure requst is correctly sent by user
const invalidRequest = (req, res) => {
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

module.exports = invalidRequest;