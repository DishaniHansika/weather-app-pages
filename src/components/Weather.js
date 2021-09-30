import React from 'react';
import moment from 'moment';


const Weather=({weatherData})=>{
    const CelciusTemp=Math.floor(weatherData.main.temp-273);
    return(
        <div className="weather-data">
            <div className="location">{weatherData.name}</div>  
            <div className="date">{moment().format('dddd')}, {moment().format('LL')}</div> 
            <div className="temperature">{CelciusTemp}&deg;C</div>
            <div className="description">{weatherData.weather[0].main}<br/>({weatherData.weather[0].description})</div>
            <div className="humidity">
                <div className="humidityIcon"><img src="https://img.icons8.com/offices/30/000000/humidity.png"/></div>{weatherData.main.humidity} %
            </div>
        </div>
    );
};

export default Weather;