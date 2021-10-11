import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CityLocation from "./CityLocation";
import WeeklyForecast from "./WeeklyForecast";

function App() {
  return (
    <div className="App">
      <Router basename="/weather-app-pages">
        <Switch>
          <Route
            exact
            path="/"
            children={
              <div>
                <CityLocation />
              </div>
            }
          />
          <Route path="/weeklyforecast" children={<WeeklyForecast />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
