import React from "react";
import './App.css';
import CityLocation from "./components/CityLocation";
import CurrentLocation from "./components/CurrentLocation";


function App() {
  
  return (
    <div className="App">
          <CityLocation/>
          <CurrentLocation/>   
    </div>
  );
}

export default App;
