var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello from NodeJS!");
}).listen(1800, "127.0.0.1");
console.log("Server is running at http://127.0.0.1:1800/");
