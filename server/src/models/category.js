// @flow

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

const del = async name => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('category');
    const response  = await collection.findOneAndDelete({ name });
    client.close();
    return response;
  } catch (error) {
    return error;
  }
};

const update = async name => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('category');
    const response  = await collection.findOneAndUpdate({ name: name.current }, { $set: { name: name.new }});
    client.close();
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  get,
  add,
  del,
  update
};
