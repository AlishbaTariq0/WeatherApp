// 5 days weather
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList , ImageBackground, ScrollView} from 'react-native';
import styles from './weeklyWeatherStyles'; // Import your styles
import images from '../../images'; // Import your images

const WeeklyWeather = ({ cityName }) => {
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    // const cityName = 'paris'; // Replace with your city name
    const API_KEY = "6c43887627efe6c7855b89894139756e"; // Replace with your actual API key

    async function fetchWeeklyData() {
      try {
        const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
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
  }, [cityName]);

  // Function to group data by date
  const groupDataByDate = (data) => {
    const groupedData = {};
    data.forEach((item) => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push(item);
    });
    return groupedData;
  };

  // Function to get the next date
  const getNextDate = (currentDate) => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1); // Add 1 day to get the next date
    return nextDate.toDateString();
  };

  const todayDateString = new Date().toDateString();

  // Filter today's data from the fetched weekly data and group it by date
  const todayData = groupDataByDate(
    weeklyData.filter((item) => {
      const date = new Date(item.dt * 1000).toDateString();
      return date === todayDateString;
    })
  );

  // Get the date for the day after the current date
  const nextDate = getNextDate(todayDateString);

  // Filter the data for the day after the current date
  const nextDayData = groupDataByDate(
    weeklyData.filter((item) => {
      const date = new Date(item.dt * 1000).toDateString();
      return date === nextDate;
    })
  );

  // Create a set to keep track of unique dates
  const uniqueDatesSet = new Set();

  // Filter the data for the rest of the week, skipping duplicates
  const restOfWeekData = weeklyData.filter((item) => {
    const date = new Date(item.dt * 1000).toDateString();
    if (!uniqueDatesSet.has(date)) {
      uniqueDatesSet.add(date);
      return date !== todayDateString && date !== nextDate;
    }
    return false;
  });

  const renderDay = (date, data) => {
    const item = data[0]; // Take the first item for each date
    // Extract and format the day, temperature, and other information from the item
    const dayOfWeek = new Date(item.dt * 1000)
      .toLocaleDateString('en-US', { weekday: 'long' })
      .split(',')[0]; // Get the day name
    const temperature = `${(item.main.temp - 273.15).toFixed(0)}°C`;
    const weatherDescription = item.weather[0].main;

    // Map weather descriptions to corresponding image keys in your images file
    const weatherImageKey = () => {
      switch (weatherDescription) {
        case 'Clear':
          return 'clear';
        case 'Clouds':
          return 'clouds';
        case 'Rain':
          return 'rain';
        default:
          return 'clear'; // Default image key
      }
    };

    return (
      <ImageBackground
        source={images.backgroundd} 
        style={{ flex: 1 }} 
      >
      <View key={item.dt} style={styles.dayContainer}>
      <Text style={styles.dayHeader}>{date}</Text>
      <View style={styles.row}>
        <Text style={styles.dayText}>{dayOfWeek}:</Text>
        <Text style={styles.temperatureText}>{temperature}, </Text>
        <Text style={styles.descriptionText}>{weatherDescription}</Text>
        <View style={styles.imageContainer}> 
          <Image source={images[weatherImageKey()]} style={styles.weatherImage} /> 
        </View>
      </View>
    </View>
    </ImageBackground>
    );
  };

return (
  <ScrollView style={styles.container} nestedScrollEnabled={true}>
    {/* Render today's weather */}
    <View>
      <FlatList
        data={Object.entries(todayData)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => renderDay(item[0], item[1])}
        contentContainerStyle={styles.scrollViewContent}
        style={styles.flatListContainer}
      />
    </View>

    {/* Render weather for the rest of the week */}
    <ScrollView horizontal>
      <View style={styles.weeklyWeatherContainer}>
        {restOfWeekData.map((item) => {
          const date = new Date(item.dt * 1000).toDateString();
          return renderDay(date, [item]);
        })}
      </View>
    </ScrollView>
  </ScrollView>
  
);
};

export default WeeklyWeather;


