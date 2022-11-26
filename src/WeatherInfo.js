import React from "react";
import TodaysDate from "./TodaysDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h4>
        <TodaysDate date={props.info.date} />
      </h4>
      <h1>{props.info.city}</h1>
      <div className="row">
        <div className="col-5"></div>
        <div className="col-2">
          <h2>{props.info.temperature}</h2>
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
            <div>{props.info.humidity} %</div>
          </div>
        </div>

        <div className="col-4">
          <div className="today-weather">
            <img src={props.info.icon} alt="🌝" />
          </div>
        </div>

        <div className="col-4">
          <div className="row">
            <div className="humid-wind">Windspeed</div>
          </div>
          <div className="row humid-wind">
            <div>{props.info.wind} km/h</div>
          </div>
        </div>
      </div>

      <p>{props.info.description}</p>
    </div>
  );
}
