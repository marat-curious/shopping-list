// @flow

import { ObjectID } from 'mongodb';
import connection from './connection';

const get = async () => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('category');
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
    const collection = db.collection('category');
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
    const collection = db.collection('category');
    const category = await collection.findOne({ name });
    let response;

    if (category) {
      response = { err: `record { name: ${name} } already exist in 'category' collection` };
    } else {
      response = await db.collection('category').insertOne({ name });
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
    const collection = db.collection('category');
    const response  = await collection.findOneAndDelete({ _id: new ObjectID(id) });
    client.close();
    return response;
  } catch (error) {
    return error;
  }
};

const update = async data => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('category');
    const response  = await collection.findOneAndUpdate(
      { _id: new ObjectID(data._id) },
      { $set: { name: data.name }},
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
