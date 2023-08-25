import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import postReducer from './reducers/postReducer';
import authReducer from './reducers/authReducer';
import './index.css';

const rootReducer = combineReducers({
  posts: postReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <App />
    
  </Provider>,
  document.getElementById('root')
);
