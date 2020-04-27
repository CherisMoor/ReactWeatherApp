//import React from "react";
//import Weather from "./components/weather";
//import React from "react";
import React from "react";
import Moment from "moment";
import "moment-timezone";
import "timezone";

const Weather = (props) => {
  return (
    <div className="app warm">
      <main>
        <h1>Cherish's Weather App</h1>
        <div className="weather-box">
          <div className="name" id="cityName">
            {props.city},{props.country}
          </div>
          <div className="zipcode" id="zipcode"></div>
          <div className="temperature">
            {props.temp}
            {"\xB0"}F
          </div>
          <div className="description">{props.desc}</div>
          <div className="time" id="displayMoment">
            {props.time}
          </div>
          <div className="date"></div>
        </div>
      </main>
      <footer>By Cherish Moore</footer>
    </div>
  );
};
export default Weather;
