const http = require('http');

test('GET Request should return a correct result', () => {
    http.get('http://localhost:4090/fibonacci?sequenceLength=4', res => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            expect(JSON.parse(data).sequence).toBe('0,1,1,2,3');
        });
    });
})

test('POST Request should return status code 406', () => {
    const options = {
        protocol: 'http:',
        hostname: 'localhost',
        port: 4090,
        path: '/fibonacci',
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        }
    }
    const req = http.request(options, res => {
        res.on('end', () => {
            expect(res.status).toBe(406);
        })
    });
    req.end();
});

test('Missing sequence length should return status 406', () => {
    http.get('http://localhost:4090/fibonacci?sequenceLength=', res => {
        res.on('end', () => {
            expect(res.status).toBe(406);
        })
    });
})

test('Passing a non-number should return status 406', () => {
    http.get('http://localhost:4090/fibonacci?sequenceLength=helloworld', res => {
        res.on('end', () => {
            expect(res.status).toBe(406);
        })
    });
})

test('Passing a decimal should return the result of the rounded-up value', () => {
    http.get('http://localhost:4090/fibonacci?sequenceLength=5.55', res => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            expect(JSON.parse(data).sequence).toBe('0,1,1,2,3,5,8');
        });
    });
})

test('Passing a decimal with multiple decimal points should ignore subsequent decimal points', () => {
    http.get('http://localhost:4090/fibonacci?sequenceLength=5.5.5.5.5.5', res => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            expect(JSON.parse(data).sequence).toBe('0,1,1,2,3,5,8');
        });
    });
})

test('Passing a value greater than 1476 should return status 406', () => {
    http.get('http://localhost:4090/fibonacci?sequenceLength=1477', res => {
        res.on('end', () => {
            expect(res.status).toBe(406);
        })
    });
})