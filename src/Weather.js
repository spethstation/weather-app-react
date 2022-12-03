import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.temperature.humidity),
      description: response.data.condition.description,
      city: response.data.city,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
    setCity("");
  }

  function search() {
    let apiKey = "402d5cdade9ocf6tbbb9c2e4fa325683";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
  }

  function citySubmit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="index-page">
          <WeatherInfo info={weatherData} />
          <hr />
          <h4>Daily Average Forecast</h4>
          <WeatherForecast coordinates={weatherData.coordinates} />
          <br />

          <form onSubmit={citySubmit}>
            <input
              value={city}
              type="text"
              placeholder="search for a city"
              autoComplete="off"
              autoFocus="on"
              onChange={cityChange}
            />
            <input type="submit" value="search" className="search-button" />
          </form>
        </div>
        <div className="mice-type">
          <a
            href="https://github.com/spethstation/weather-app-react"
            rel="noreferrer"
          >
            <div className="source-link">
              open-source code by elspeth humble
            </div>
          </a>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
