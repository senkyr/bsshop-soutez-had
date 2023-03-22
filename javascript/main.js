let http = require('http');
let app = require('./app');

let { port } = require('./conf');

http.createServer(app).listen(port, '127.0.0.1', () => {
	console.log(`Had je připraven na http://127.0.0.1:${port}...`);
});
