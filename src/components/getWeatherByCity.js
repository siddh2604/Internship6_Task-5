// src/services/weatherService.js
import axios from "axios";

const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const apiUrl = "https://www.weatherapi.com/docs/weather_conditions.json";

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(
      `${apiUrl}?q=${city}&units=metric&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
