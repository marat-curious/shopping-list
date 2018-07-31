// @flow

import { ObjectID } from 'mongodb';
import connection from './connection';

const get = async () => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('shop');
    const response = await collection.find().toArray();
    client.close();
    return response;
  } catch (error) {
    return error;
  }
};

const getById = async id => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('shop');
    const response = await collection.findOne({ _id: new ObjectID(id) });
    client.close();
    return response;
  } catch (error) {
    return error;
  }
};

const add = async name => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('shop');
    const shop = await collection.findOne({ name });
    let response;

    if (shop) {
      response = { err: `record { name: ${name} } already exist in 'shop' collection` };
    } else {
      response = await db.collection('shop').insertOne({ name });
    }

    client.close();
    return response;
  } catch(error) {
    return error;
  }
};

const del = async id => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('shop');
    const response  = await collection.findOneAndDelete({ id });
    client.close();
    return response;
  } catch (error) {
    return error;
  }
};

const update = async name => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('shop');
    const response  = await collection.findOneAndUpdate(
      { name: name.current },
      { $set: { name: name.new }},
      { returnOriginal: false }
    );
    client.close();
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  get,
  getById,
  add,
  del,
  update
};
