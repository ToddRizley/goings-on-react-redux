export default function selectedEventReducer(state = {selectedEvent: []}, action){
  switch(action.type){
    case 'UPDATE_SELECTED_EVENT':
      return Object.assign({}, state, { selectedEvent: action.payload });
    default:
      return state
  }
}
