// @flow

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

const del = async name => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('shop');
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
    const collection = db.collection('shop');
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
