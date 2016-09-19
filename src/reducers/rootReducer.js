import { combineReducers } from 'redux';
import concertsReducer from './concertsReducer.js'

const rootReducer = combineReducers({
  concertList: concertsReducer
});

export default rootReducer;
