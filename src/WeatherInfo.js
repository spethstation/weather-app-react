import React from "react";
import TodaysDate from "./TodaysDate";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h4>
        <TodaysDate date={props.info.date} />
      </h4>
      <h1>{props.info.city}</h1>
      <Temperature celsius={props.info.temperature} />

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
