import * as types from '../constants/types'

const INITIAL_STATE = {
  items: [],
  itemDetail: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_LIST_SUCCESS:
      return {
        ...state, items: action.payload.map(item =>
          ({...item})
        )
      };
    case types.GET_LIST_FAIL:
    case types.COMPARE_ITEM:
        return {
       ...state, itemDetail: action.item
      };  
    default:
      return state
  }
}
