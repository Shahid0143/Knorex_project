import React, { useState, useEffect } from "react";
import "../Componnets/WeatherForecast.css";

const WeatherForecast = () => {
  const [selectedCity, setSelectedCity] = useState("")
  const [forecastData, setForecastData] = useState(null)
  const [loading, setLoading] = useState(false) 

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (!selectedCity)
         return 
        setLoading(true)

        const apiKey = "eee3032eb92d5531511faf21cea0d3eb";
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data")
        }

        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error)
        alert("Failed to fetch weather data. Please try again later.")
      } finally {
        setLoading(false); 
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  const handleSelectChange = (e) => {
    setSelectedCity(e.target.value)
  };

  return (
    <div className="weather-forecast-container">
      <div className="weather-forecast-select">
        <label htmlFor="citySelect">Select a city:</label>
        <select id="citySelect" onChange={handleSelectChange}>
          <option value="">-- Select a city --</option>
          <option value="Ho Chi Minh">Ho Chi Minh</option>
          <option value="Singapore">Singapore</option>
          <option value="Kuala Lumpur">Kuala Lumpur</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Athens">Athens</option>
        </select>
      </div>
      {loading ? ( 
        <div>Loading...</div>
      ) : (
        forecastData && (
          <div className="weather-forecast-details">
            <h2>Weather Forecast for {selectedCity} for next 3 days</h2>
            <p>Description: {forecastData.weather[0].description} &#9729;</p>
            <p>Temperature: {forecastData.main.temp}°C &#9788;</p>
            <p>Maximum Temperature: {forecastData.main.temp_max}°C &#9788;</p>
            <p>Minimum Temperature: {forecastData.main.temp_min}°C &#9788;</p>
          </div>
        )
      )}
    </div>
  );
};

export default WeatherForecast;
