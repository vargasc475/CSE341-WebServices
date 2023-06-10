const express = require('express');
const app = express();
const routes = require('./controllers/routes')

const port = 3000;

app.get('/', routes.homeRoute);

app.get('/jerald', routes.angeeRoute);

app.get('/amgee', routes.jeremiRoute);

app.listen(process.env.port || port);
console.log('Web server is listening at port' + (process.env.port || port))