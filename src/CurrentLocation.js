import React, { useEffect, useState } from "react";
import Axios from "axios";
import Weather from "./Weather";
import { CircularProgress } from "@material-ui/core";

const CurrentLocation = () => {
  const [lati, setLatitude] = useState("");
  const [longi, setLongitude] = useState("");
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
      try {
        const response = await Axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${process.env.REACT_APP_API_KEY}`
        );
        setWeather(response.data);
        console.log(response.data);
      } catch (e) {
        const response = await Axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=6.9271&lon=79.8612&appid=${process.env.REACT_APP_API_KEY}`
        );
        setWeather(response.data);
      }
    };
    fetchData();
  }, [lati, longi]);

  return (
    <div>
      {typeof weather.main != "undefined" ? (
        <div className="locationWeather">
          <Weather weatherData={weather} />
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default CurrentLocation;
