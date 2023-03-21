let dotenv = require('dotenv');

dotenv.config();

exports.id = process.env.ID;
exports.ip = process.env.IP;
exports.port = process.env.PORT;
exports.name = process.env.NAME;
