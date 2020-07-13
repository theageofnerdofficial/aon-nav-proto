import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Main from './Main';

// Reducer imports:
import { userReducer } from './reducers';

// Redux logger provides useful console logs concerning state:
const logger = createLogger();

// Root reducers are combined using combineReducers() from Redux library:
const rootReducers = combineReducers({
  userReducer,
});

// A store is created from root reducers with Redux logger and Think.
// Thunk is used to return functions to defer certain actions.
const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
