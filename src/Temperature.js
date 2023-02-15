import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahren(event) {
    event.preventDefault();
    setUnit("fahren");
  }

  function convertToCels(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h2>{props.celsius}</h2>
          </div>
          <div className="col-4">
            <div className="temp-links">
              C |{" "}
              <a href="/" onClick={convertToFahren}>
                F
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h2>{Math.round(fahrenheit)}</h2>
          </div>
          <div className="col-4">
            <div className="temp-links">
              <a href="/" onClick={convertToCels}>
                C
              </a>{" "}
              | F
            </div>
          </div>
        </div>
      </div>
    );
  }
}
