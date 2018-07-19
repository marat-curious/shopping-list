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

router.route('/product')
  .get(controllers.product.get)
  .post(controllers.product.add)
  .delete(controllers.product.del)
  .put(controllers.product.update);

module.exports = router;
