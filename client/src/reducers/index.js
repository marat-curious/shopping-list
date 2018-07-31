import { combineReducers } from 'redux';
import shopList from './shopList';
import shopItem from './shopItem';

export default combineReducers({
  shopList,
  shopItem
});
