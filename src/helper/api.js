import React, {  useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

import Weather from '../screens/Weather';

const cityName="lahore"

const API_KEY = "6c43887627efe6c7855b89894139756e";

const Weather = async (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState('');
    setLoading(true);
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;

    let res = await fetch(API);
    if (res.status === 200) {
      res = await res.json();
      setWeatherData(res);
    } else {
      setWeatherData(null);
    }
    setLoading(false);
  }






// export default Weather;






// import React, { useState, useEffect } from 'react'; // Import useEffect
// import WeatherScreenTop from '../components/WeatherScreenTop';
// import WeatherScreenBottom from '../components/WeatherScreenBottom';
// import Weather from '../screens/Weather';

// const cityName = "lahore";
// const API_KEY = "6c43887627efe6c7855b89894139756e";

// const Weather = async () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       setLoading(true);
//       const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

//       try {
//         const response = await fetch(API);
//         if (response.status === 200) {
//           const data = await response.json();
//           setWeatherData(data);
//         } else {
//           setWeatherData(null);
//         }
//       } catch (error) {
//         console.error("Error fetching weather data:", error);
//         setWeatherData(null);
//       }

//       setLoading(false);
//     };

//     fetchWeatherData();
//   }, []); // Make sure to include an empty dependency array

//   return (
//     <>
//       {/* Pass weatherData as prop to WeatherScreenTop and WeatherScreenBottom */}
//       <WeatherScreenTop prop={weatherData} />
//       <WeatherScreenBottom prop={weatherData} />
//     </>
//   );
// };

// export default Weather;
