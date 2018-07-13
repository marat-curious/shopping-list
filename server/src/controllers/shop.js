// @flow

import shopModel from '../models/shop';

const getShops = () => shopModel.getShops();
//const setShop = params => shop.setShop(params.name);

module.exports = {
  getShops,
  //setShop
};
