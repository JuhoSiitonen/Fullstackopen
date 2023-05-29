import { useState, useEffect } from 'react'
import CountrySearch from './components/CountrySearch'
import SearchResults from './components/SearchResults'
import countryinfo from './services/countryinfo'


const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    countryinfo
      .getAll()
      .then(response => {
        setAllCountries(response)
      })
  }, [])

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
    </div>
  )
}

export default App
