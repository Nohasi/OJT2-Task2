const url = require('url');

// Function to make sure requst is correctly sent by user
const invalidRequest = (req, res) => {
    let currentURL = url.parse(req.url, true);
    // Using the incorrect path in url
    if (currentURL.pathname != '/fibonacci'){
        res.writeHead(406, {'Content-type': 'application/json'});
        res.end('{"error": "Incorrect Pathname"}');
        console.log('{"error": "Incorrect Pathname"}');
        return true;
    }

    // Method needs to be GET to get data from user
    if (req.method != 'GET'){
        res.writeHead(406, {'Content-type': 'application/json'});
        res.end('{"error": "Incorrect API Request"}');
        console.log('{"error": "Incorrect API Request"}');
        return true;
    }

    // Regex to make sure parameter exists in url
    if (!/[?&]sequenceLength=/.test(req.url)){
        res.writeHead(406, {'Content-type': 'application/json'});
        res.end('{"error": "Parameter not passed"}');
        console.log('{"error": "Parameter not passed"}');
        return true;
    }
    
    // Regex that removes all non-numeric characters and checks if number is passed
    if (currentURL.query.sequenceLength.replace(/\D/g, '') === ""){
        res.writeHead(406, {'Content-type': 'application/json'});
        res.end('{"error": "No number passed in parameter"}');
        console.log('{"error": "No number passed in parameter"}');
        return true;
    }

    return false;
}

module.exports = invalidRequest;