import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './weatherStyles';
import images from '../../images'; // Import your images object

const HourlyForecast = () => {
  const [hourlyData, setHourlyData] = useState([]);
  const cityName = "Lahore";
  const API_KEY = "6c43887627efe6c7855b89894139756e";

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(0);
  };

  const convertTo12HourFormat = (time24Hour) => {
    const [hour, minute] = time24Hour.split(':');
    const time12Hour = `${(hour % 12) || 12}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
    return time12Hour;
  };

  useEffect(() => {
    async function fetchHourlyData() {
      try {
        const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
        const response = await fetch(API);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const hourlyForecastData = data.list || [];

        setHourlyData(hourlyForecastData);
      } catch (error) {
        console.error('Error fetching hourly data:', error);
      }
    }

    fetchHourlyData();
  }, []);


const renderItem = ({ item }) => {
  // Parse the date and time using JavaScript's Date object
  const dateTime = new Date(item?.dt_txt);

  // Extract the hours and minutes
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  // Format the time in 12-hour format with AM/PM
  const formattedTime = `${(hours % 12 || 12)}:${minutes < 10 ? '0' : ''}${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;

  // Map the weather condition to an image key (lowercase)
  const imageMappings = {
    'clear': 'clear',
    'clouds': 'cloud',
    'rain': 'rain',
    // Add more mappings as needed
  };

  // Get the corresponding image key or use a default
  const imageKey = imageMappings[item?.weather[0]?.main.toLowerCase()] || 'default';

  return (
    <View style={styles.hourlyItem}>
      <Text style={styles.dateText}>{item?.dt_txt.split(' ')[0]}</Text>
      <Text style={styles.timeText}>{formattedTime}</Text>
      <Text style={styles.tempText}>{kelvinToCelsius(item?.main?.temp)}°C</Text>
      <Image source={images[imageKey]} style={styles.weatherImage} /> 
      <Text style={styles.descriptionText}>{item?.weather[0]?.main}</Text>
    </View>
  );
};

  return (
    <FlatList
      data={hourlyData}
      renderItem={renderItem}
      keyExtractor={(item) => item.dt.toString()}
      horizontal={true}
    />
  );
};

export default HourlyForecast;
