export default function selectedRestaurantReducer(state = {selectedRestaurant: []}, action){
  switch(action.type){
    case 'UPDATE_SELECTED_RESTAURANT':
      return Object.assign({}, state, { selectedRestaurant: action.payload });
    default:
      return state
  }
}
