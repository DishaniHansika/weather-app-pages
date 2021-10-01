import React from 'react';
import moment from 'moment';


const Weather=({weatherData})=>{
    const CelciusTemp=Math.floor(weatherData.main.temp-273);
    return(
        <div className="weather-data">
            <div className="location">{weatherData.name}</div>  
            <div className="date">{moment().format('dddd')}, {moment().format('LL')}</div> 
            <div className="weatherChange">
                {((weatherData.weather[0].main=="Rain")?<div className="rain"><div className="weatherIcon"><img src="https://img.icons8.com/color/96/000000/rain--v2.png"/></div>Take an umbrella or a raincoat</div>
                :(weatherData.weather[0].main=="Clouds")?<div className="clouds"><div className="weatherIcon"><img src="https://img.icons8.com/color/96/000000/clouds.png"/></div>Wear a jacket</div>
                :(weatherData.weather[0].main=="Clear")?<div className="clear"><div className="weatherIcon"><img src="https://img.icons8.com/emoji/96/000000/sun-emoji.png"/></div>Don't forget your sunglasses</div>
                :(weatherData.weather[0].main=="Thunderstorm")?<div className="thunderstorm"><div className="weatherIcon"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-thunderstorm-weather-justicon-flat-justicon.png"/></div>Wear rubber boots if going outdoors</div>
                :(weatherData.weather[0].main=="Drizzle")?<div className="drizzle"><div className="weatherIcon"><img src="https://img.icons8.com/color/96/000000/light-rain-2--v1.png"/></div>Wear a hoodie</div>
                :(weatherData.weather[0].main=="Snow")?<div className="snow"><div className="weatherIcon"><img src="https://img.icons8.com/color/48/000000/snow--v1.png"/></div>Wear a sweater</div>:<div></div>)}
            </div>
            <div className="temperature">{CelciusTemp}&deg;C</div>
            <div className="description">{weatherData.weather[0].main}<br/>({weatherData.weather[0].description})</div>
            <div className="humidity">
                <div className="humidityIcon"><img src="https://img.icons8.com/offices/30/000000/humidity.png"/></div>{weatherData.main.humidity} %
            </div>
        </div>
    );
};

export default Weather;