import { useState, useEffect } from 'react'
import CountrySearch from './components/CountrySearch'
import SearchResults from './components/SearchResults'
import countryinfo from './services/countryinfo'
import Weather from './components/Weather'

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [weatherInfo, setWeatherInfo] = useState(null)

  useEffect(() => {
    countryinfo
      .getAll()
      .then(response => {
        setAllCountries(response)
      })
  }, [])

  useEffect(() => {
    if (searchResults.length === 1) {
      countryinfo
        .getWeather(searchResults[0].capital)
        .then(response => {
          setWeatherInfo(response)
        })
        .catch(error => {
          console.log('virhe' + error)
        })
    }
  }, [searchResults])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    if (event.target.value !== '') {
      const checkFilter = (country) => {
        return country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
      }
      setSearchResults(allCountries.filter(checkFilter))
    }
  }

  const selectCountry = (country) => {
    setSearchResults([country])
  }

  return (
    <div>
      <CountrySearch value={newFilter} onChange={handleFilterChange}/>
      <SearchResults allCountries={allCountries} newFilter={newFilter}
      selectCountry={selectCountry} searchResults={searchResults}/>
      <Weather searchResults={searchResults} weatherInfo={weatherInfo}/>
    </div>
  )
}

export default App
