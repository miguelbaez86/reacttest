import { combineReducers } from 'redux'
import item from './itemReducer'

const compareApp = combineReducers({
  item
});

export default compareApp