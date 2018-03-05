const http = require('http');

http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h3>Hello World</h3>');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');