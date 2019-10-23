import * as types from '../constants/types'

const INITIAL_STATE = {
  items: [],
  itemDetail: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_ITEMS:
      return {
        ...state, items: action.payload.map(item =>
          ({...item})
        )
      };
    case types.COMPARE_ITEM:
        return {
       ...state, itemDetail: action.item
      };  
    default:
      return state
  }
}
