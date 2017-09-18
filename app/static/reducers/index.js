import { combineReducers } from 'redux';
import CommonReducer from './CommonReducer';
import MapReducer from './MapReducer';
import ObjsReducer from './ObjsReducer';
import VarReducer from './VarReducer';
import VisitorReducer from './VisitorReducer';
export default combineReducers({
  CommonReducer,
  visitor:VisitorReducer,
  vars:VarReducer,
  obj:ObjsReducer,
  map:MapReducer,
})
