// @flow

import mysql from 'mysql';

const connection = mysql.createConnection({
  host: process.env.DBHOST || 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect((err) => {
  if(err) throw err;
  console.log('Connected to Database');
})

module.exports = connection;
