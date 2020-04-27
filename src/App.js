//import React from "react";
import React, { useState } from "react";
import moment from "moment";
//import "moment-timezone";
import Weather from "./components/weather.jsx";
//import Form from "./components/form.jsx";

function App() {
  const apiKey = "1fe3341f2f29bd0cda3bcdc84b8acdcc";

  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("0:00");
  const [input, setInput] = useState("");

  const getTime = (time) => {
    return moment()
      .utcOffset(time / 60)
      .format("h:mm a");
  };

  const getWeather = async (e) => {
    e.preventDefault();

    /* if(input === ""){
      setError("please enter a valid zip code")
      return;
    } */

    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=` +
        input +
        country +
        `&appid=` +
        apiKey
    );

    const weather = await apiCall.json();

    //console.log(weather);
    setCity(weather.name);
    setCountry(weather.sys.country);
    setTemp(Math.floor((weather.main.temp - 273) * (9 / 5) + 32));
    setInput("");
    setDesc(weather.weather[0].description);
    setIcon(weather.weather[0].icon);
    setTime(getTime(weather.timezone));

    //var lon = data.coord.lon;
    //var lat = data.coord.lat;

    /* fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=` +
            { lat } +
            `&lon=` +
            { lon } +
            `&appid=` +
            apiKey
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      */
  };

  return (
    <div className="app">
      <div className="userInputForm">
        <form>
          <div className="input">
            <input
              className="userZipcode"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Zip Code Here..."
            ></input>
            <button onClick={getWeather} type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <Weather
          city={city}
          country={country}
          temp={temp}
          desc={desc}
          time={time}
        />
        <img src={`https://openweathermap.org/img/wn/` + icon + `@2x.png`} />
      </div>
    </div>
  );
}

export default App;
