const _initialState = {
  shopList: {
    isFetching: false,
    data: []
  }
};

const shopList = (state = _initialState, action) => {
  switch(action.type) {
  case 'SHOP_LIST_REQUEST':
    return {
      shopList: {
        isFetching: true,
        data: []
      }
    };
  case 'SHOP_LIST_FETCH_SUCCESS':
    return {
      shopList: {
        isFetching: false,
        data: [ ...action.data.data]
      }
    };
  case 'SHOP_LIST_FETCH_ERROR':
    return {
      shopList: {
        isFetching: false,
        data: action.error
      }
    };
  default:
    return state;
  };
};

export default shopList;
