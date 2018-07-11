// @flow

import mysql from 'mysql';
import config from './config';

const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name
});

connection.connect((err) => {
  if(err) throw err;
  console.log('Connected to Database');
})

module.exports = connection;
