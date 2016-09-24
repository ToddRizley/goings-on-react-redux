export default function selectedBarReducer(state = {selectedBar: []}, action){
  switch(action.type){
    case 'UPDATE_SELECTED_BAR':
      return Object.assign({}, state, { selectedBar: action.payload });
    default:
      return state
  }
}
