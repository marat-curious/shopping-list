// @flow

import models from '../models';

const get = async (req, res) => {
  const response = await models.category.get();
  res.json({ response });
};

const add = async (req, res) => {
  const response = await models.category.add(req.body.name);
  res.json({ response });
};

const del = async (req, res) => {
  const response = await models.category.del(req.body.name);
  res.json({ response });
};

const update = async (req, res) => {
  const response = await models.category.update({ current: req.body.nameCur, new: req.body.nameNew});
  res.json({ response });
}

module.exports = {
  get,
  add,
  del,
  update
};
