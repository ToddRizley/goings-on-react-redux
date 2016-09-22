export default function restaurantsReducer(state = {restaurantsList: [] }, action){
  switch(action.type){
    case 'ADD_RESTAURANT_OPTIONS':
      return Object.assign({}, state, { restaurantsList: action.payload });
    default:
      return state
  }
}
