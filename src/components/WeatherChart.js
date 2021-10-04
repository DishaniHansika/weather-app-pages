import React from "react";
import moment, { ISO_8601 } from 'moment';

const WeatherChart=({weatherChartData})=>{
    return(
        <>{[0,1,2,3,4,5,6].map((i)=>(
        <div className="weatherDataWeek">
            <div class="day">{moment(weatherChartData.daily[i].dt*1000).format('ddd')}</div>
            <div className="weatherChangeWeek">
                {(weatherChartData.daily[i].weather[0].main==="Rain")?<div className="weatherIcon"><img src="https://img.icons8.com/color/96/000000/rain--v2.png"/></div>
                :(weatherChartData.daily[i].weather[0].main==="Clear")?<div className="weatherIcon"><img src="https://img.icons8.com/emoji/96/000000/sun-emoji.png"/></div>
                :(weatherChartData.daily[i].weather[0].main==="Thunderstorm")?<div className="weatherIcon"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-thunderstorm-weather-justicon-flat-justicon.png"/></div>
                :(weatherChartData.daily[i].weather[0].main==="Drizzle")?<div className="weatherIcon"><img src="https://img.icons8.com/color/96/000000/light-rain-2--v1.png"/></div>
                :(weatherChartData.daily[i].weather[0].main==="Snow")?<div className="weatherIcon"><img src="https://img.icons8.com/color/48/000000/snow--v1.png"/></div>:<div></div>
             }</div>
            <div className="temperatureWeek">Day: {weatherChartData.daily[i].temp.day}&deg;C</div>
            <div className="temperatureWeek">Night: {weatherChartData.daily[i].temp.night}&deg;C</div>  
            <div className="wind"><img src="https://img.icons8.com/material-outlined/24/000000/wind.png"/> {weatherChartData.daily[i].wind_speed} ms<sup>-1</sup></div>   
        </div>))}</>
    );
};
 
export default WeatherChart;