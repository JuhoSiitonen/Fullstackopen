import { useState, useEffect } from 'react'
import CountrySearch from './components/CountrySearch'
import SearchResults from './components/SearchResults'
import countryinfo from './services/countryinfo'


const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    countryinfo
      .getAll()
      .then(response => {
        setAllCountries(response)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <CountrySearch value={newFilter} onChange={handleFilterChange}/>
      <SearchResults allCountries={allCountries} newFilter={newFilter}/>
    </div>
  )
}

export default App
