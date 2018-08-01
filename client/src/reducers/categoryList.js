const _initialState = {
  isFetching: false,
  data: []
};

const categoryList = (state = _initialState, action) => {
  switch(action.type) {
  case 'CATEGORY_LIST_REQUEST':
    return {
      isFetching: true,
      data: []
    };
  case 'CATEGORY_LIST_FETCH_SUCCESS':
    return {
      isFetching: false,
      data: [ ...action.data.data]
    };
  case 'CATEGORY_LIST_FETCH_ERROR':
    return {
      isFetching: false,
      data: action.error
    };
  default:
    return state;
  };
};

export default categoryList;
