import { combineReducers } from 'redux';
import concertsReducer from './concertsReducer'
import selectedEventReducer from './selectedEventReducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  concertList: concertsReducer,
  selectedEvent: selectedEventReducer
});

export default rootReducer;
