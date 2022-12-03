import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastEachDay from "./ForecastEachDay";

export default function WeatherForecast(props) {
  let [forecastReady, setForecastReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setForecastReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setForecastReady(true);
  }

  if (forecastReady) {
    return (
      <div className="five-day-forecast">
        <div className="row">
          <div className="col forecast">
            <ForecastEachDay data={forecastData[1]} />
          </div>
          <div className="col forecast">
            <ForecastEachDay data={forecastData[2]} />
          </div>
          <div className="col forecast">
            <ForecastEachDay data={forecastData[3]} />
          </div>
          <div className="col forecast">
            <ForecastEachDay data={forecastData[4]} />
          </div>
          <div className="col forecast">
            <ForecastEachDay data={forecastData[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let long = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiKey = "402d5cdade9ocf6tbbb9c2e4fa325683";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${long}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
