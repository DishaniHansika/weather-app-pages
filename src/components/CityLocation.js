import React,{useState} from "react";
import {useHistory} from "react-router-dom"
import Axios from 'axios';
import Weather from "./Weather";

const CityLocation=()=>{
    const[city,setCity]=useState('');
    const [cityWeather,setCityWeather]=useState([]);
       
    const handleChange= event =>{
        setCity(event.target.value);
    };

    const handleSubmit=async (event)=>{
        event.preventDefault();
        const searchResponse=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`,)
        setCityWeather(searchResponse.data);
        setCity('');
    }
    let history=useHistory();
    return(
        <div className="cityDiv" style={{backgroundImage:"url(/weather.png)",backgroundSize:"cover", padding:"10%"}}>
            <form className="search" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter City" value={city}
                onChange={handleChange}/>
                <button style={{margin:"10px",border:"none", padding:"10px", borderRadius:"4px", fontWeight:"bold",backgroundColor:"rgba(200, 200, 210, 0.9)"}}>Get Weather</button>
            </form><br/>
            {(typeof cityWeather.main !='undefined') ? (
            <div className="cityLocationWeather">
                <Weather weatherData={cityWeather}/>
            </div>
            ):<div className="weeklyBtn" 
                onClick={()=>history.push(`/weeklyforecast`)}>7-Day Forecast</div>}
      </div>    

        
    );

};

export default CityLocation;