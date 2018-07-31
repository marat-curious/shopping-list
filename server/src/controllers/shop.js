// @flow

import models from '../models';

const get = async (req, res) => {
  const data = await models.shop.get();
  res.json({ data });
};

const getById = async (req, res) => {
  const data = await models.shop.getById(req.params.id);
  res.json({ data });
};

const add = async (req, res) => {
  const data = await models.shop.add(req.body.name);
  res.json({ data });
};

const del = async (req, res) => {
  const data = await models.shop.del(req.body.id);
  res.json({ data });
};

const update = async (req, res) => {
  const data = await models.shop.update(req.body);
  res.json({ data });
}

module.exports = {
  get,
  getById,
  add,
  del,
  update
};
