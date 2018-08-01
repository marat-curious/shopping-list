// @flow

const _initialState = {
  isFetching: false,
  data: {}
};

const shopItem = (state = _initialState, action) => {
  switch(action.type) {
  case 'SHOP_ITEM_REQUEST':
    return {
      isFetching: true,
      data: {}
    };
  case 'SHOP_ITEM_FETCH_SUCCESS':
    return {
      isFetching: false,
      data: action.data.data
    };
  case 'SHOP_ITEM_UPDATE_SUCCESS':
    return {
      isFetching: false,
      data: {}
    };
  case 'SHOP_ITEM_ADD_SUCCESS':
    return {
      isFetching: false,
      data: {}
    };
  case 'SHOP_ITEM_FETCH_ERROR':
  case 'SHOP_ITEM_UPDATE_ERROR':
  case 'SHOP_ITEM_ADD_ERROR':
    return {
      isFetching: false,
      data: action.error
    };
  default:
    return state;
  }
};

export default shopItem;
