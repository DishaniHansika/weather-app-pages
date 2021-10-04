import React,{useEffect,useState} from "react";
import Axios from 'axios';
import Weather from "./Weather";

const CurrentLocation=()=>{
    const [lati, setLatitude] = useState('');
    const [longi, setLongitude] = useState('');
    const [weather, setWeather] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        });
       
        const response=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${process.env.REACT_APP_API_KEY}`,)
        setWeather(response.data);
        console.log(response.data)

      }
      fetchData();
    }, [lati,longi])
  
    return (
      <div className="currentDiv" style={{backgroundImage:"url(/weather1.jpg)",backgroundSize:"cover", padding:"10%"}}>   
        <h4>Your Location:</h4>
        {(typeof weather.main !='undefined') ? (
            <div className="currentLocationWeather">
              <Weather weatherData={weather}/>
            </div>
          
        ):<div></div>}
        
      </div>
    );

};

export default CurrentLocation;