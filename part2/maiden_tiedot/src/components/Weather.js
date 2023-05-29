
const Weather = ({searchResults, weatherInfo}) => {
    if (searchResults.length === 1 && weatherInfo !== null) {
        const country = searchResults[0]
        return (
            <div>
                <h2>Weather in {country.capital}</h2>
                temperature {(weatherInfo.main.temp-273.15).toFixed(2)} Celsius
                <br></br>
                <img src={'https://openweathermap.org/img/wn/'+weatherInfo.weather[0].icon+'@2x.png'}/>
                <br></br>
                wind {weatherInfo.wind.speed} m/s
            </div>
        )
    } else {
        return <></>
    }

}

export default Weather