
const SearchResults = ({allCountries, newFilter }) => {
    if (newFilter !== '') {
      const checkFilter = (country) => {
        return country.name.common.toLowerCase().includes(newFilter.toLowerCase())
      }
      const results = allCountries.filter(checkFilter)
      if (results.length > 1 && results.length < 10) {
        return (
          <ul>
            {results.map(country =>
              <li key={country.name.common}>
                {country.name.common}
              </li>
              )}
          </ul>
        )
      } else if (results.length > 10) {
          return (
            <p>Too many matches, specify another filter</p>
        )
      }else {
        const languages = []
        for (const value of Object.values(results[0].languages)) {
            languages.push(value)
        }
        return (
          <div>
            <h1>{results[0].name.common}</h1>
            capital {results[0].capital}
            <br></br>
            area {results[0].area}
            <br></br>
            <h2>Languages:</h2>
            <ul>
                {languages.map(e =>
                  <li key={e}>
                    {e}
                  </li>
                )}
            </ul>
            <img src={results[0].flags.png}/>
          </div>
      )}
    }
}

export default SearchResults
