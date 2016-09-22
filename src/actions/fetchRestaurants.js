import axios from 'axios'

function fetchRestaurants(locationData){
  var lat = locationData
  var long = locationData
  const url = `https://api.seatgeek.com/2/events?venue.city=${editCity}&datetime_utc=${date}&per_page=30`
  return axios.get(url).then( (response)=> {
  return {
    type: 'FETCH_RESTAURANTS',
    payload: response.data
    }
  })
}
export default fetchRestaurants
