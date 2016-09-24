import { combineReducers } from 'redux';
import concertsReducer from './concertsReducer'
import selectedEventReducer from './selectedEventReducer'
import restaurantsReducer from './restaurantsReducer'
import selectedRestaurantReducer from './selectedRestaurantReducer'
import barsReducer from './barsReducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  concertList: concertsReducer,
  selectedEvent: selectedEventReducer,
  restaurantsList: restaurantsReducer,
  selectedRestaurant: selectedRestaurantReducer,
  barsList: barsReducer
});

export default rootReducer;
