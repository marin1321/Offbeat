import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  postReducer: postReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
