// @flow

import models from '../models';

const get = async (req, res) => {
  const data = await models.product.get(req.query);
  res.json({ data });
};

const getById = async (req, res) => {
  const data = await models.product.getById(req.params.id);
  res.json({ data });
};

const add = async (req, res) => {
  const data = await models.product.add(req.body);
  res.json({ data });
};

const del = async (req, res) => {
  const data = await models.product.del(req.body.id);
  res.json({ data });
};

const update = async (req, res) => {
  const data = await models.product.update(req.body);
  res.json({ data });
}

module.exports = {
  get,
  getById,
  add,
  del,
  update
};

