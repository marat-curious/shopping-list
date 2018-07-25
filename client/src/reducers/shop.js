const _initialState = {
  list: []
};

const shop = (state = _initialState, action) => {
  switch(action.type) {
  case 'SHOP_LIST_FETCH_SUCCESS':
    return {
      list: [ ...action.data.data]
    };
  case 'SHOP_LIST_FETCH_ERROR':
    return {
      error: action.error
    };
  default:
    return state;
  };
};

export default shop;
