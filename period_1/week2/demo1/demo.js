var http = require('http');

http.createServer(function (req, res) {
    console.log("I was called");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(5555, '127.0.0.1');

console.log('Server running at http://127.0.0.1:5555/');