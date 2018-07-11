// @flow

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    'message': 'Server Response OK',
    'process.env.PORT': process.env.PORT,
    'process.env.DBHOST': process.env.DBHOST
  })
});

module.exports = router;
