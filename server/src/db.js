// @flow

import { MongoClient } from 'mongodb';

const user = process.env.MONGO_INITDB_ROOT_USERNAME;
const pass = process.env.MONGO_INITDB_ROOT_PASSWORD;
const host = process.env.DBHOST;
const database = process.env.MONGO_INITDB_DATABASE;

const url = 'mongodb://user:pass@host:27017/admin';

async function connect (error, operation) {
  try {
    const client = await MongoClient.connect (url, {useNewUrlParser: true});
    console.log("Connected successfully to server");
    const db = client.db(database);
    return db;
    });
  } catch(err) {
    return err.stack;
  }
};


