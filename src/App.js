import React, { useEffect, useState } from "react";
import './App.css';
import Weather from "./components/Weather";
import Axios from "axios";


function App() {
  const [lati, setLatitude] = useState([]);
  const [longi, setLongitude] = useState([]);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
     
      const response=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=9dac5b7f2f2e92ced2f1d3d6f391be4e`,)
      setWeather(response.data);
    }
    fetchData();
  }, [lati,longi])
  

  return (
    <div className="App" style={{backgroundImage:"url(/weather.png)",backgroundSize:"cover", padding:"15%"}}>
      {(typeof weather.main != 'undefined') ? (
        <Weather weatherData={weather}/>
      ):(
        <div></div>
      )}
    </div>
  );
}

export default App;
