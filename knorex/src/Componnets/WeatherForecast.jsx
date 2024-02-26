import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WeatherForecast = () => {
  const { city } = useParams();
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "eee3032eb92d5531511faf21cea0d3eb";
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Weather Forecast for {city}</h2>
      <p>Description: {forecastData.weather[0].description} &#9729;</p>
      <p>Temperature: {forecastData.main.temp}°C &#9788;</p>
      <p>Temperature: {forecastData.main.temp_max}°C &#9788;</p>
      <p>Temperature: {forecastData.main.temp_min}°C &#9788;</p>
    </div>
  );
};

export default WeatherForecast;
