import { combineReducers } from 'redux';
import shopList from './shopList';
import shopItem from './shopItem';
import categoryList from './categoryList';
import categoryItem from './categoryItem';
import productList from './productList';
import productItem from './productItem';

export default combineReducers({
  shopList,
  shopItem,
  categoryList,
  categoryItem,
  productList,
  productItem
});
