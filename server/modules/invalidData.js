const invalidData = (postedData, res) => {
    // Makes sure data has the 'sequenceLength' property
    if(!postedData.hasOwnProperty('sequenceLength')){
        res.writeHead(406, {'Content-type': 'application/json'});
        res.end('{"error": "Parameter is missing or incorrect"}');
        return true;
    }

    // Reject data if no number is passed
    if(isNaN(postedData.sequenceLength)){
        res.writeHead(406, {'Content-type': 'application/json'});
        res.end('{"error": "Data passed is not a number"}');
        return true;
    }

    if(postedData.sequenceLength.length === 0){
        res.writeHead(406, {'Content-type': 'application/json'});
        res.end('{"error": "Nothing passed"}');
        return true;
    }

    return false;
}

module.exports = invalidData;