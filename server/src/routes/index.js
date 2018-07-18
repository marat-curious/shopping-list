// @flow

import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.route('/shop')
  .get(controllers.shop.get)
  .post(controllers.shop.add)
  .delete(controllers.shop.del)
  .put(controllers.shop.update);

router.route('/category')
  .get(controllers.category.get)
  .post(controllers.category.add)
  .delete(controllers.category.del)
  .put(controllers.category.update);

module.exports = router;
