// @flow

import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.route('/shop')
  .get(controllers.shop.get)
  .post(controllers.shop.add)
  .delete(controllers.shop.del)
  .put(controllers.shop.update);

module.exports = router;
