import SingleCountry from './SingleCountry'
import Button from './Button'

const SearchResults = ({selectCountry,  searchResults}) => {
  const results = searchResults
  if (results.length > 1 && results.length < 10) {
    return (
      <ul>
        {results.map(country =>
          <li key={country.name.common}>
            {country.name.common} 
            <Button handleClick={selectCountry} country={country}/>
          </li>
        )}
      </ul>
    )
  } else if (results.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
    }else if (results.length === 1) {
      console.log('1')
      return (
        <div>
          <SingleCountry country={results[0]}/>
        </div>
      )}
    }

export default SearchResults
