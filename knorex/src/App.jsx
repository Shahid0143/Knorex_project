import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DropdownMenu from "./Componnets/DropdownMenu";
// import DropdownMenu from "./components/Dropdown";
// import WeatherForecast from "./components/WeatherForecast";
import WeatherForecast from "./Componnets/WeatherForecast"
const cities = ["Ho Chi Minh", "Singapore", "Kuala Lumpur", "Tokyo", "Athens"];

const App = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (selectedCity) {
        try {
          const apiKey = "eee3032eb92d5531511faf21cea0d3eb";
         
          // Fetch current weather data
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch current weather data");
          }

          const weatherData = await response.json();
          console.log(weatherData);

          // Fetch forecast data
          const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${apiKey}&units=metric`
          );

          if (!forecastResponse.ok) {
            throw new Error("Failed to fetch forecast data")
          }

          const forecastData = await forecastResponse.json()

          
          const formattedForecastData = forecastData.list
            .slice(0, 8)
            .map((item) => ({
              date: item.dt_txt,
              weather: item.weather[0].description,
              temperature: Math.round(item.main.temp),
              icon: item.weather[0].icon,
            }));

          setForecast(formattedForecastData);
        } catch (error) {
          console.error("Error fetching weather data:", error.message)
          alert("Failed to fetch weather data. Please try again later.")
        }
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <Routes>
        <Route
          path="/"
          element={<DropdownMenu cities={cities} onSelectCity={setSelectedCity} />}
        />
        <Route
          path="/forecast"
          element={<Navigate to="/" />}
        />
        <Route
          path="/forecast/:city"
          element={<WeatherForecast forecast={forecast} />}
        />
      </Routes>
    </div>
  );
};

export default App;