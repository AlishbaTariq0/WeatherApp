import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import images from '../../images';

function WeatherScreenTop({ weatherData, selectedUnit }) {
  const [temperatureUnit, setTemperatureUnit] = useState('°C');

  useEffect(() => {
    // Update the temperature unit based on the selectedUnit
    setTemperatureUnit(selectedUnit ? '°C' : '°F');
  }, [selectedUnit]);

  const temperatureInCelsius = weatherData?.list[0]?.main?.temp
    ? (weatherData?.list[0]?.main.temp - 273.15).toFixed(0)
    : 'N/A';
  const weatherDescription = weatherData?.list[0]?.weather[0]?.main || 'N/A';

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedDayTime = currentDateTime.toLocaleString('en-US', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={styles.container}>
 

     {/* Settings Icon */}
      {/* <TouchableOpacity onPress={handleSettingsPress}>
        <Image source={images.settings} style={styles.settingsIcon} />
      </TouchableOpacity> */}
      <View style={styles.imageContainer}>
        <Image source={images.cloud} style={styles.weatherImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cityName}>{weatherData?.city?.name}</Text>
        <Text style={styles.temperature}>
          {temperatureInCelsius}
          {temperatureUnit} {/* Display temperature unit */}
          <Text style={styles.weatherDescription}>{weatherDescription}</Text>
        </Text>
        <Text style={styles.dateTime}>{formattedDayTime}</Text>
      </View>
    </View>
  );
}

export default WeatherScreenTop;
