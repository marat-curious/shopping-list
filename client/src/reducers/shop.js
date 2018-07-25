const _initialState = {
  list: []
};

const shop = (state = _initialState, action) => {
  switch(action.type) {
  case 'FETCH_SHOP_LIST_SUCCESS':
    return {
      list: [ ...action.data.data]
    };
  case 'FETCH_SHOP_LIST_ERROR':
    return {
      error: action.error
    };
  default:
    return state;
  };
};

export default shop;
