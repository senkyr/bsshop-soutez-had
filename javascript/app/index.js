const express = require('express');
const app = express();

app.use(express.json());

app.use('/move', (req, res) => {
	res.json(require('./snake').move(req.body));
});

app.use('/init', (req, res) => {
	res.send(require('./snake').init(req.body));
});

app.use('/', (req, res) => {
	res.send(require('./snake').index());
});

app.use('*', (req, res) => {
	res.status(404).send('Not found');
});

module.exports = app;
