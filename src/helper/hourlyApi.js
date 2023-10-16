//hourlyApi.js
const API_KEY = "6c43887627efe6c7855b89894139756e";

export const fetchHourlyWeatherData = async (cityName) => {
    const API = `https://api.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=${API_KEY}`;
    const res = await fetch(API);
    console.log('Hourly Weather Data:', data);

    if (res.status === 200) {
      const data = await res.json();
      return data;
    } else {
      throw new Error("Failed to fetch hourly weather data");
    }
  };
  
  