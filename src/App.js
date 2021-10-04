import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CityLocation from "./components/CityLocation";
import CurrentLocation from "./components/CurrentLocation";
import WeeklyForecast from "./components/WeeklyForecast";


function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children= {<div>
            <CityLocation/>
            <CurrentLocation/>
            </div>}/>
            <Route path="/weeklyforecast" children={<WeeklyForecast/>}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
