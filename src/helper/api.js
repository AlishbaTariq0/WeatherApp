// import React, {  useState } from 'react';
// import Weather from '../screens/Weather';

// const cityName="lahore"

// const API_KEY = "6c43887627efe6c7855b89894139756e";

// const Weather = async (props) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [icon, setIcon] = useState('');
//     setLoading(true);
//     const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;

//     let res = await fetch(API);
//     if (res.status === 200) {
//       res = await res.json();
//       setWeatherData(res);
//     } else {
//       setWeatherData(null);
//     }
//     setLoading(false);
//   }

// export default Weather;

// // api.js
const API_KEY = "6c43887627efe6c7855b89894139756e";

export const fetchWeatherData = async (cityName) => {
  const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
  const res = await fetch(API);
console.log('weather', API)
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("Failed to fetch weather data");
  }
};


