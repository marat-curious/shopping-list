import { combineReducers } from 'redux';
import shopList from './shopList';
import shopItem from './shopItem';
import categoryList from './categoryList';
import categoryItem from './categoryItem';

export default combineReducers({
  shopList,
  shopItem,
  categoryList,
  categoryItem
});
