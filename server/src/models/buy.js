// @flow

import connection from './connection';

/**
 * Return list of purchases
 * @param {Object} param - { name: "shop_name/date", value: "shop_name/date" }
 */

const get = async param => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('buy');
    let response;
    let search = {};
    search[param.name] = { $eq: param.value };
    if (param) {
      response = await collection.find(search).toArray();
    } else {
      response = await collection.find().toArray();
    }
    client.close();
    return response;
  } catch (error) {
    return error;
  }
};

const add = async buy => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('buy');
    const response = await db.collection('buy').insertOne(buy);
    client.close();
    return response;
  } catch(error) {
    return error;
  }
};

const del = async id => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('buy');
    const response  = await collection.findOneAndDelete({ _id: {$eq: id} });
    client.close();
    return response;
  } catch (error) {
    return error;
  }
};

const update = async buy => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('buy');
    const id = buy.id; delete buy.id;
    const response  = await collection.findOneAndReplace({ _id: { $eq: id }}, buy);
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
