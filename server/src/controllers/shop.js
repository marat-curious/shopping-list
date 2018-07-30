// @flow

import models from '../models';

const get = async (req, res) => {
  const data = await models.shop.get();
  res.json({ data });
};

const getById = async (req, res) => {
  const data = await models.shop.getById();
  res.json({ data });
};

const add = async (req, res) => {
  const response = await models.shop.add(req.body.name);
  res.json({ response });
};

const del = async (req, res) => {
  const response = await models.shop.del(req.body.name);
  res.json({ response });
};

const update = async (req, res) => {
  const data = await models.shop.update({ current: req.body.nameCur, new: req.body.nameNew});
  res.json({ data });
}

module.exports = {
  get,
  getById,
  add,
  del,
  update
};
