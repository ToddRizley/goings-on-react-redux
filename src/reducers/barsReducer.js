export default function barsReducer(state = {barsList: [] }, action){
  switch(action.type){
    case 'ADD_BAR_OPTIONS':
      return Object.assign({}, state, { barsList: action.payload });
    default:
      return state
  }
}
