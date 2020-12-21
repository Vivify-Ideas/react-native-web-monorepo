import { combineReducers } from 'redux';

import errorReducer from './ErrorReducer';
import loaderReducer from './LoaderReducer';
import userReducer from './UserReducer';

export default combineReducers({
  userReducer,
  loaderReducer,
  errorReducer
});
