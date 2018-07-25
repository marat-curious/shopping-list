// @flow

import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

let server = express();
let port = process.env.PORT || 8000;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use('/api', router);

server.listen(port);
