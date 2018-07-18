// @flow

import { MongoClient } from 'mongodb';

const host = process.env.DBHOST;
const database = process.env.MONGO_INITDB_DATABASE;
const user = process.env.MONGO_INITDB_USERNAME;
const pass = process.env.MONGO_INITDB_PASSWORD;

const url = `mongodb://${user}:${pass}@${host}:27017/${database}`;

exports.connect = async () => {
  try {
    const client = await MongoClient.connect (url, {useNewUrlParser: true});
    const db = client.db(database);
    return { client, db };
  } catch (err) {
    throw new Error(err);
  }
};
