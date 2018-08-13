// @flow

import connection from './connection';

/**
 * Return products list in category
 * @param {String} category - Category name
 */

const get = async category => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('product');
    const response = await collection.find({ category }).toArray();
    client.close();
    return response;
  } catch (error) {
    return error;
  }
};

/**
 * Insert Product
 * @param {Object} product - Product: { name: "product_name", category: "category_name" }
 */

const add = async data => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('product');
    const product = await collection.findOne({ name: data.name });
    let response;

    if (product) {
      response = { err: `record { name: ${name} } already exist in 'product' collection` };
    } else {
      response = await db.collection('product').insertOne({ name: data.name, category: data.category });
    }

    client.close();
    return response;
  } catch(error) {
    return error;
  }
};

/**
 * Delete Product
 * @param {String} name - Product name
 */

const del = async name => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('product');
    const response  = await collection.findOneAndDelete({ name });
    client.close();
    return response;
  } catch (error) {
    return error;
  }
};

/**
 * Update Product
 * @param {Object} product - Product: { name: "product_name", category: "category_name" }
 */

const update = async product => {
  try {
    const { client, db } = await connection.connect();
    const collection = db.collection('product');
    const response  = await collection.findOneAndUpdate({ name: product.current }, { $set: { name: product.new }});
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
