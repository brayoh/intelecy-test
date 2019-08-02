import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/** Redux */
import form from './reducers/form';
import rootReducer from './reducers';

const Config = process.env.NODE_ENV;

const getStore = () => {
  if (Config === 'development') {
    const store = createStore(rootReducer, applyMiddleware(logger, thunk));
    return store;
  } else if (Config === 'production') {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
  }
};

export default getStore;
