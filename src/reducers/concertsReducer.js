export default function concertsReducer(state = {concertList: []}, action){
  switch(action.type){
    case 'FETCH_CONCERTS':
      return Object.assign({}, state, { concertList: action.payload.events });
    default:
      return state
  }
}
