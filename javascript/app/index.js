const express = require('express');
const { id } = require('../conf');

const app = express();
app.use(express.json());

app.use(`/snake/${id}/move`, (req, res) => {
	res.json(require('./snake').move(req.body));
});

app.use(`/snake/${id}/init`, (req, res) => {
	res.send(require('./snake').init(req.body));
});

app.use(`/snake/${id}/`, (req, res) => {
	res.send(require('./snake').index());
});

app.use('*', (req, res) => {
	res.status(404).send('Not found');
});

module.exports = app;
