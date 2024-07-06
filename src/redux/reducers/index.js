import { combineReducers } from 'redux';
import healthReducer from './healthReducer';

export default combineReducers({
  health: healthReducer,
});
