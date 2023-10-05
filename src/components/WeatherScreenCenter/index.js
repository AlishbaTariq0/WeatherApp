import React from 'react';
import { SafeAreaView, View, Text, ImageBackground } from 'react-native-safe-area-context';
import HourlyForecast from '../WeatherForecast/HourlyForecast'; // Import HourlyForecast
import styles from '../WeatherForecast/weatherStyles';

const WeatherScreenCenter = ({ weatherData }) => {
  // Extract sunrise and sunset times from the weatherData prop
  const sunriseTime = new Date(weatherData.city.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(weatherData.city.sunset * 1000).toLocaleTimeString();

  return (
    <ImageBackground
    source={images.backgroundd} 
    style={{ flex: 1 }} 
  >
    <SafeAreaView>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Hourly Forecast</Text>
        <HourlyForecast data={weatherData.list} />

        {/* Display sunrise and sunset */}
        <View style={styles.sunriseSunset}>
          <Text>Sunrise: {sunriseTime}</Text>
          <Text>Sunset: {sunsetTime}</Text>
        </View>
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default WeatherScreenCenter;
