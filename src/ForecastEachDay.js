import React from "react";

export default function ForecastEachDay(props) {
  function roundDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return weekDays[day];
  }

  return (
    <div className="ForecastEachDay">
      <div className="days">
        <span className="forecast-icons">
          <img src={props.data.condition.icon_url} alt="/" />
        </span>
      </div>
      <h3>{Math.round(props.data.temperature.day)} C</h3>
      <span className="day-of-week">{roundDay()}</span>
    </div>
  );
}
