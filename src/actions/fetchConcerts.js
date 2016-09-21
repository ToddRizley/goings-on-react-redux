import axios from 'axios'

function fetchConcerts(city, date){
  var editCity = city.split(" ").join("%20")
  const url = `https://api.seatgeek.com/2/events?venue.city=${editCity}&datetime_utc=${date}&per_page=30`
  return axios.get(url).then( (response)=> {
  return {
    type: 'FETCH_CONCERTS',
    payload: response.data
    }
  })
}
export default fetchConcerts
