import { combineReducers } from 'redux';
import HOMEREDUCER from './reducer_home';

const rootReducer = combineReducers({
  dataList : HOMEREDUCER
});

export default rootReducer;
