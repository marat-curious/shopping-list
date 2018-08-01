// @flow

import models from '../models';

const get = async (req, res) => {
  const data = await models.category.get();
  res.json({ data });
};

const getById = async (req, res) => {
  const data = await models.category.getById(req.params.id);
  res.json({ data });
};

const add = async (req, res) => {
  const data = await models.category.add(req.body.name);
  res.json({ data });
};

const del = async (req, res) => {
  const data = await models.category.del(req.body.id);
  res.json({ data });
};

const update = async (req, res) => {
  const data = await models.category.update(req.body);
  res.json({ data });
}

module.exports = {
  get,
  getById,
  add,
  del,
  update
};
