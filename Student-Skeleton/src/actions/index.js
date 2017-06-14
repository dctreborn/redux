import Axios from 'axios';

//GET NEW API KEY FROM INSTRUCTOR, insert below.
const WEATHER_API_KEY = 'b3f5e13c5396c075455542e491606af8';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

//CODE GOES HERE
export const FETCH_WEATHER = "FETCH_WEATHER";
//CODE GOES HERE

export function fetchWeather(city) {
  const url = `${rootUrl}&q=${city},us`;

  let request = Axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
