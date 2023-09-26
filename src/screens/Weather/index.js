import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native';
import WeatherScreenTop from '../../components/WeatherScreenTop';
import WeatherScreenCenter from '../../components/WeatherScreenCenter';
import WeatherScreenBottom from '../../components/WeatherScreenBottom';
import HourlyForecast from '../../components/WeatherForecast/HourlyForecast';
import weatherStyles from '../../components/WeatherForecast/weatherStyles';
import styles from './style';
import SunriseSunset from '../../components/SunriseSunset';
import WeeklyWeather from '../../components/WeatherForecast/WeeklyWeather';
import images from '../../images';
import { useNavigation } from '@react-navigation/native';
import Settings from '../../components/Settings';
import SearchBar from '../../components/SearchBar'; // Import the SearchBar component
import Favourites from '../../components/Favourites/favourites';

const cityName = "Lahore";
const API_KEY = "6c43887627efe6c7855b89894139756e";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(true); // Initialize as Celsius
  const navigation = useNavigation();

  const handleSettingsPress = () => {
    navigation.navigate('Settings', { selectedUnit });
  };

  async function getWeatherData() {
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

  useEffect(() => {
    getWeatherData();
  }, []);

  if (weatherData === null) {
    return (
      <ActivityIndicator size="large" />
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <WeatherScreenTop weatherData={weatherData} selectedUnit={selectedUnit} />
        <View>
          <SunriseSunset weatherData={weatherData} />
        </View>
      </View>
      <View style={weatherStyles.container}>
        <Text style={weatherStyles.title}>Hourly Forecast for Lahore</Text>
        <HourlyForecast data={weatherData.list} />
      </View>
      
      <WeeklyWeather />

      <View>
        <WeatherScreenBottom weatherData={weatherData} />
      </View>

     
    </ScrollView>
  );
};

export default Weather;

        
 {/* <WeatherScreenCenter weatherData={weatherData} /> */}
{/*         
        <View style={styles.container}>
      <Text style={styles.title}>Weather Current Forecast Graph</Text>
      <WeatherChart data={temperatureData} /> 
    </View> */}