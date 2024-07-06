// store.js
import { createStore, applyMiddleware } from 'redux';
import dataReducer from './reducers';

const store = createStore(dataReducer);

export default store;
