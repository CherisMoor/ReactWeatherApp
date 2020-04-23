//import React from "react";
import React, { useState } from "react";
import moment from "moment";
import axios from "axios";

const api = {
  key: "1fe3341f2f29bd0cda3bcdc84b8acdcc",
  url:
    "https://api.openweathermap.org/data/2.5/weather?zip=28052,us&appid=1fe3341f2f29bd0cda3bcdc84b8acdcc",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const buttonClick = () => {
    var input = document.getElementById("userInput").value;
    function degreesKtoF(num) {
      return Math.floor((num - 273) * (9 / 5) + 32);
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=1fe3341f2f29bd0cda3bcdc84b8acdcc`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var zipcodeValue = input;
        var temperatureValue = degreesKtoF(data["main"]["temp"]);
        var nameValue = data["name"];
        var weatherValue = data["weather"][0]["description"];
        var lon = data.coord.lon;
        var lat = data.coord.lat;
        //console.log(data);
        axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=1fe3341f2f29bd0cda3bcdc84b8acdcc&units=imperial`,
          (time) => {
            let datetime = moment()
              .tz(time.timezone)
              .format("dddd MMMM Do YYYY, h:mm a z");
            {
              "#displayMoment".text(datetime);
            }
          }
        );
        function getTime(time) {
          return moment()
            .utcOffset(time / 60)
            .format("h:mm a z");
        }
        var timeValue = getTime();
        /* main.innerHTML = nameValue;
        weather.innerHTML = "Weather: " + weatherValue;
        temperature.innerHTML = "Temperature: " + temperatureValue + " °F";
        zip.innerHTML = "Zip Code: " + zipcodeValue;
        time.innerHTML = "Time: " + timeValue;
       */ input.value =
          "";
      });
  };

  return (
    <div className="app">
      <main>
        <div className="input">
          <input
            className="userInput"
            type="text"
            placeholder="Enter Zip Code Here..."
          />
          <button className="button">Submit</button>
        </div>
        <div className="weather-box">
          <div className="name" id="cityName">
            Gastonia, US
          </div>
          <div className="zipcode">28052</div>
          <div className="temperature">--</div>
          <div className="description">Sunny</div>
          <div className="time" id="displayMoment">
            3:33pm
          </div>
          <div className="date">4/23/2020</div>
        </div>
      </main>
      <footer>By Cherish Moore</footer>
    </div>
  );
}
export default App;
