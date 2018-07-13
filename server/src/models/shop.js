// @flow

import * as connection from './connection';

const setShop = async name => {
  const client = await connection.connect;
  const db = connection.db(client);

  let response = null;

  try {
    response = await db.collection('shops').insetOne({ name });
  } catch(err) {
    response = err;
  }

  connection.close(client);
  return response;
};

const getShops = () => ({test: 'test'});

module.exports = {
  getShops,
  //setShop
};
