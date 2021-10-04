import React,{useEffect,useState} from "react";
import Axios from 'axios';
import WeatherChart from "./WeatherChart";

const WeeklyForecast=(props)=>{ 
    const [lati, setLatitude] = useState('');
    const [longi, setLongitude] = useState('');
    const [weatherData, setWeatherData] = useState([]);
    const {humidity,pressure,sunrise,sunset,wind_speed}=props;
  
    useEffect(() => {
      const fetchWeeklyData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        });
       
        const weeklyResponse=await Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${longi}&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_API_KEY}`,)
        setWeatherData(weeklyResponse.data);
      }
      fetchWeeklyData();
    }, [lati,longi])
  
    return (
      <div className="dataDiv" style={{backgroundImage:"url(/weather1.jpg)",backgroundSize:"cover", padding:"10%"}}>   
        {(typeof weatherData.daily!='undefined') ? (
            <div className="chartWeather">
              <WeatherChart weatherChartData={weatherData}/>
            </div>   
        ):<div></div>}
        
      </div>
    );

};

export default WeeklyForecast;