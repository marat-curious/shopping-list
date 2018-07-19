// @flow

import models from '../models';

const get = async (req, res) => {
  let response;
  if (req.body.shop) {
    response = await models.buy.get({ name: 'shop', value: req.body.shop });
  } else if (req.body.date) {
    response = await models.buy.get({ name: 'date', value: req.body.date });
  } else {
    response = await models.buy.get();
  }
  res.json({ response });
};

const add = async (req, res) => {
  const response = await models.buy.add(req.body.buy);
  res.json({ response });
};

const del = async (req, res) => {
  const response = await models.buy.del(req.body.buy.id);
  res.json({ response });
};

const update = async (req, res) => {
  const response = await models.buy.update(req.body.buy);
  res.json({ response });
}

module.exports = {
  get,
  add,
  del,
  update
};
