import React, { useEffect, useState } from "react";
import Axios from "axios";
import WeatherChart from "./WeatherChart";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import backgoundImg from "./weather5.jpg";

const WeeklyForecast = () => {
  const [lati, setLatitude] = useState("");
  const [longi, setLongitude] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchWeeklyData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
      try {
        const weeklyResponse = await Axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${longi}&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );
        setWeatherData(weeklyResponse.data);
      } catch (e) {
        const weeklyResponse = await Axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=6.9271&lon=79.8612&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );
        setWeatherData(weeklyResponse.data);
      }
    };
    fetchWeeklyData();
  }, [lati, longi]);

  return (
    <div
      className="dataDiv"
      style={{
        backgroundImage: `url(${backgoundImg})`,
        backgroundSize: "cover",
        padding: "10%",
        height: "1200px",
      }}
    >
      {typeof weatherData.daily != "undefined" ? (
        <div className="chartWeather">
          <button
            onClick={() => history.goBack()}
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              border: "none",
              float: "left",
            }}
          >
            <img src="https://img.icons8.com/ios/50/000000/circled-left-2.png" />
          </button>
          <h2>7-Day Forecast</h2>
          <br />
          <WeatherChart weatherChartData={weatherData} />
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default WeeklyForecast;
