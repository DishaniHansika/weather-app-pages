import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Weather from "./Weather";
import CurrentLocation from "./CurrentLocation";

const CityLocation = () => {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState([]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchResponse = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    );
    setCityWeather(searchResponse.data);
    setCity("");
  };
  const refresh = () => {
    window.location.reload();
  };

  let history = useHistory();
  return (
    <div
      className="cityDiv"
      style={{
        backgroundImage: "url(/weather.png)",
        backgroundSize: "cover",
        padding: "10%",
      }}
    >
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={handleChange}
        />
        <button
          style={{
            margin: "8px",
            border: "none",
            padding: "10px",
            borderRadius: "4px",
            fontWeight: "bold",
            backgroundColor: "rgba(200, 200, 210, 0.9)",
          }}
        >
          Get Weather
        </button>
        <button
          onClick={refresh}
          style={{
            margin: "5px",
            border: "none",
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <img src="https://img.icons8.com/android/24/000000/refresh.png" />
        </button>
      </form>
      <br />

      {typeof cityWeather.main != "undefined" ? (
        <div className="locationWeather">
          <Weather weatherData={cityWeather} />
        </div>
      ) : (
        <div>
          <CurrentLocation />
          <div style={{ margin: "25px 15px" }}>
            <button
              className="forecastBtn"
              onClick={() => history.push(`/weeklyforecast`)}
            >
              7 - Day Forecast
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityLocation;
