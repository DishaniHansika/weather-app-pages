import React, { useEffect, useState } from "react";
import './App.css';
import Weather from "./components/Weather";
import Location from "./components/Location";
import LocationWeather from "./components/LocationWeather";
import Axios from "axios";


function App() {
  const [lati, setLatitude] = useState('');
  const [longi, setLongitude] = useState('');
  const [weather, setWeather] = useState([]);
  const [locationWeather,setLocationWeather]=useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
     
      const response=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${process.env.REACT_APP_API_KEY}`,)
      setWeather(response.data);
    }
    fetchData();
  }, [lati,longi])

  const searchLocation=(props)=>{
    const{location}=props;
    const enLocation=encodeURIComponent(location);
    const searchResponse=Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${enLocation}&appid=${process.env.REACT_APP_API_KEY}`,)
    setLocationWeather(searchResponse.data);
};

  

  return (
    <div className="App" style={{backgroundImage:"url(/weather.png)",backgroundSize:"cover", padding:"15%"}}>   
      <div><Location onSubmit={searchLocation}/></div>
      {(typeof weather.main !='undefined') ? (
        <div>
          <Weather weatherData={weather}/>
        </div>
      ):<div></div>}
      {(typeof locationWeather.main !='undefined'? (
        <div> <LocationWeather locationWeatherData={locationWeather}/></div>
      ):<div></div>)}
    </div>
  );
}

export default App;
