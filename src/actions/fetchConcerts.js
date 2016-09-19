import axios from 'axios'

function fetchConcerts(city, date){
  debugger
  const url = `https://api.seatgeek.com/2/events?venue.city=${city}&datetime_utc=${date}&per_page=20`
  return axios.get(url).then( (response)=> {
  return {
    type: 'FETCH_CONCERTS',
    payload: response.data
    }
  })
}
export default fetchConcerts
