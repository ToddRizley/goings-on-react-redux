import { combineReducers } from 'redux';
import concertsReducer from './concertsReducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  concertList: concertsReducer
});

export default rootReducer;
