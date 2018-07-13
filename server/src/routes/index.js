// @flow

import express from 'express';
import shop from './shop';

const router = express.Router();

router.get('/shop', shop.getShops);
//router.post('/shop', shop.setShop);

module.exports = router;
