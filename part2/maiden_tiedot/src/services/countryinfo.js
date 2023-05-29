import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'
const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key = process.env.REACT_APP_API_KEY

const getAll = () => {
  const request = axios.get(baseUrl + 'all')
  return request.then(response => response.data)
}

const getWeather = (city) => {
  const request = axios.get(weatherAPI + city + '&appid=' + api_key)
  return request.then(response => response.data)
}

export default { 
  getAll: getAll,
  getWeather: getWeather
}