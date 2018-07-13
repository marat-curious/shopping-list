// @flow

import { MongoClient } from 'mongodb';

const user = process.env.MONGO_INITDB_ROOT_USERNAME;
const pass = process.env.MONGO_INITDB_ROOT_PASSWORD;
const host = process.env.DBHOST;
const database = process.env.MONGO_INITDB_DATABASE;

const url = 'mongodb://user:pass@host:27017/admin';

exports.connect = async () => {
  try {
    const client = await MongoClient.connect (url, {useNewUrlParser: true});
    console.log('Connected successfully to server');
    return client;
  } catch(err) {
    return err.stack;
  }
};

exports.close = client => {
  try {
    client.close();
    console.log('Connection to server closed');
    return true;
  } catch(err) {
    return err;
  }
};

exports.db = client => client.db(database);
