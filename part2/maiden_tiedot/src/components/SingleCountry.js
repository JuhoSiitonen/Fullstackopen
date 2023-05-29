
const SingleCountry = ({country}) => {
    const languages = []
    for (const value of Object.values(country.languages)) {
        languages.push(value)
    }
    return (
        <div>
          <h1>{country.name.common}</h1>
          capital {country.capital}
          <br></br>
          area {country.area}
          <br></br>
          <h2>Languages:</h2>
          <ul>
              {languages.map(e =>
                <li key={e}>
                  {e}
                </li>
              )}
          </ul>
          <img src={country.flags.png}/>
        </div>
    )
}

export default SingleCountry