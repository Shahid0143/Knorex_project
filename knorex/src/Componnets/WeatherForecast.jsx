import React from "react";

const WeatherForecast = ({ forecast }) => {
  return (
    <div>
      {forecast.map((day, index) => (
        <div key={index}>
          <p>{day.date}</p>
          <img
            src={`http://openweathermap.org/img/wn/${day.icon}.png`}
            alt={day.weather}
          />
          <p>{day.weather}</p>
          <p>{day.temperature}°C</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
