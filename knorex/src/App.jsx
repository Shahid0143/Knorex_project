import React from "react";
import WeatherForecast from "./Componnets/WeatherForecast";

const App = () => {
  return (
    <>
      <h1 style={{textAlign:'center'}}>Weather Forecast</h1>
      <div>
        <WeatherForecast />
      </div>
    </>
  );
};

export default App;
