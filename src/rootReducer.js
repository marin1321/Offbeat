import { combineReducers } from 'redux';
import authReducer from './reducers';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  auth: authReducer,
});

export default rootReducer;