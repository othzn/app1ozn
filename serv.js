var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {
res.writeHead(200, {'content-type': 'text/plain'});
res.write('Hello World! OZNs\n');
res.write('Hello World! OZNs');
for(i=0;i<10;i++)
{
	res.write('\nHello World! OZNs '+i);
}
res.end();
});
var port = 8081;
server.listen(port);
server.once('listening', function() {
console.log('Hello World server listening on port %d', port);
});