const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The issue is that the server might not always be able to listen on the specified port. If another application is already using that port, the server will fail to start, and you won't receive any error message. This can lead to frustrating debugging sessions.
//Solution is to handle the error and log information to the console.