// @flow

import shopController from '../controllers/shop';

const getShops = (req, res) => {
  const response = shopController.getShops();
  res.json({ response });
};

module.exports = {
  getShops
};
