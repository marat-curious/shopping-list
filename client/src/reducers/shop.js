const _initialState = {
  list: [],
  item: {}
};

const shop = (state = _initialState, action) => {
  switch(action.type) {
  case 'SHOP_LIST_FETCH_SUCCESS':
    return {
      ...state,
      list: [ ...action.data.data]
    };
  case 'SHOP_LIST_FETCH_ERROR':
    return {
      error: action.error
    };
  case 'SHOP_LIST_ITEM_FETCH_SUCCESS':
    return {
      ...state,
      item: action.data.data
    };
  case 'SHOP_LIST_ITEM_FETCH_ERROR':
    return {
      error: action.error
    };
  default:
    return state;
  };
};

export default shop;
