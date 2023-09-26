import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './weeklyWeatherStyles';
import images from '../../images';

const WeeklyWeather = () => {
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    const cityName = 'Lahore'; // Replace with your city name
    const API_KEY = "6c43887627efe6c7855b89894139756e"; // Replace with your actual API key
    const numberOfDays = 7; // Number of days for the forecast

    async function fetchWeeklyData() {
      try {
        const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=${numberOfDays}&appid=${API_KEY}`;
        const response = await fetch(API);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const dailyData = data.list || [];

        setWeeklyData(dailyData);
      } catch (error) {
        console.error('Error fetching weekly data:', error);
      }
    }

    fetchWeeklyData();
  }, []);

  const renderDay = (item) => {
    // Extract and format the day, temperature, and other information from the item
    const dayOfWeek = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }).split(',')[0]; // Get the day name
    const temperature = `${(item.main.temp - 273.15).toFixed(0)}°C`;
    const weatherDescription = item.weather[0].main;

    // Map weather descriptions to corresponding image keys in your images file
    const weatherImageKey = () => {
      switch (weatherDescription) {
        case 'Clear':
          return 'clear';
        case 'Clouds':
          return 'cloud';
        case 'Rain':
          return 'rain';
        default:
          return 'clear'; // Default image key
      }
    };

    return (
      <View key={item.dt} style={styles.dayContainer}>
        <View style={styles.row}>
          <Text style={styles.dayText}>{dayOfWeek}:</Text>
          <Text style={styles.temperatureText}>{temperature}, </Text>
          <Text style={styles.descriptionText}>{weatherDescription}</Text> 
          <Image source={images[weatherImageKey()]} style={styles.weatherImage} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {weeklyData.map((day) => renderDay(day))}
    </View>
  );
};

export default WeeklyWeather;
