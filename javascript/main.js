let http = require('http');
let app = require('./app');

let { ip, port } = require('./conf');

http.createServer(app).listen(port, ip, () => {
	console.log(`Had je připraven na http://${ip}:${port}...`);
});
