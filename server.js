var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello, world, this site also has some web jobs');
}).listen(process.env.PORT); 
