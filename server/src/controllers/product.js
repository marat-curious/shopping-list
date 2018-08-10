// @flow

import models from '../models';

const get = async (req, res) => {
  const data = await models.product.get(req.body.category);
  res.json({ data });
};

const add = async (req, res) => {
  const response = await models.product.add(req.body.product);
  res.json({ response });
};

const del = async (req, res) => {
  const response = await models.product.del(req.body.product.name);
  res.json({ response });
};

const update = async (req, res) => {
  const response = await models.product.update({ current: req.body.product.nameCur, new: req.body.product.nameNew});
  res.json({ response });
}

module.exports = {
  get,
  add,
  del,
  update
};

