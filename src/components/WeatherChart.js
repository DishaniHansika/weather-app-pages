import React from "react";
import moment from 'moment';

const WeatherChart=({weatherChartData})=>{
    return(
        <div className="weather-data">
            <div className="weatherChange">
                {((weatherChartData.daily[0].weather[0].main==="Rain")?<div className="weatherIcon"><img src="https://img.icons8.com/color/96/000000/rain--v2.png"/></div>
                :(weatherChartData.daily[0].weather[0].main==="Clear")?<div className="weatherIcon"><img src="https://img.icons8.com/emoji/96/000000/sun-emoji.png"/></div>
                :(weatherChartData.daily[0].weather[0].main==="Thunderstorm")?<div className="weatherIcon"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-thunderstorm-weather-justicon-flat-justicon.png"/></div>
                :(weatherChartData.daily[0].weather[0].main==="Drizzle")?<div className="weatherIcon"><img src="https://img.icons8.com/color/96/000000/light-rain-2--v1.png"/></div>
                :(weatherChartData.daily[0].weather[0].main==="Snow")?<div className="weatherIcon"><img src="https://img.icons8.com/color/48/000000/snow--v1.png"/></div>:<div></div>)}
            </div>
            <div className="temperature">Day {weatherChartData.daily[0].temp.day}&deg;C</div>
            <div className="temperature">Night {weatherChartData.daily[0].temp.night}&deg;C</div>     
        </div>
    );
};

export default WeatherChart;