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
// const API_KEY = "6c43887627efe6c7855b89894139756e";

// export const fetchWeatherData = async (cityName) => {
//   const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
//   let res = await fetch(API);
// console.log('response', API);
//   if (res.status === 200) {
//     return await res.json(); // Return the data
//   } else {
//     throw new Error("Failed to fetch weather data");
//   }
// };


// // api.js
const API_KEY = "6c43887627efe6c7855b89894139756e";

export const fetchWeatherData = async (cityName) => {
  const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
  const res = await fetch(API);

  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("Failed to fetch weather data");
  }
};



// // api.js
// // api.js
// const API_KEY = "6c43887627efe6c7855b89894139756e";

// // Function to fetch weather data for a given city
// export const fetchWeatherData = async (cityName) => {
//   const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
//   console.log(API, 'abc');
//   const res = await fetch(API);

//   if (res.status === 200) {
//     const data = await res.json();
//     return data;
//   } else {
//     throw new Error("Failed to fetch weather data");
//   }
// };

// // Function to fetch weekly weather data for a given city
// export const fetchWeeklyWeatherData = async (cityName) => {
//   // You can use the same API endpoint as fetchWeatherData if it provides weekly data
//   const weeklyAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
//   console.log(weeklyAPI, 'bcd');
//   const res = await fetch(weeklyAPI);

//   if (res.status === 200) {
//     const data = await res.json();
//     return data;
//   } else {
//     throw new Error("Failed to fetch weekly weather data");
//   }
// };
