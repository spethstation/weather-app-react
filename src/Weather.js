import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Halifax",
    date: "Friday, Nov 18th, 4:45pm",
    description: "partly cloudy",
    imgLink: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 32,
    wind: 13,
    temp: 12,
  };
  return (
    <div className="Weather">
      <div className="index-page">
        <h4>{weatherData.date}</h4>
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-5"></div>
          <div className="col-2">
            <h2>{weatherData.temp}</h2>
          </div>
          <div className="col-5">
            <div className="temp-links">
              <a href="/">C</a> | <a href="/">F</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="humid-wind">Humidity</div>
            </div>
            <div className="row humid-wind">
              <div>{weatherData.humidity}%</div>
            </div>
          </div>

          <div className="col-4">
            <div className="today-weather">
              <img src={weatherData.imgLink} alt={weatherData.description} />
            </div>
          </div>

          <div className="col-4">
            <div className="row">
              <div className="humid-wind">Windspeed</div>
            </div>
            <div className="row humid-wind">
              <div>{weatherData.wind} km/h</div>
            </div>
          </div>
        </div>

        <p>{weatherData.description}</p>
        <hr />
        <br />
        <form>
          <input
            type="text"
            placeholder="search for a city"
            autoComplete="off"
            autofocus="on"
          />
          <input type="submit" value="search" className="search-button" />
        </form>
      </div>
      <div className="mice-type">
        <a href="https://github.com/spethstation/Weather-App">
          <div className="source-link">open-source code by elspeth humble</div>
        </a>
      </div>
    </div>
  );
}
