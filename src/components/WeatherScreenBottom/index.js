import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../images';

const WeatherScreenBottom = ({ weatherData }) => {
  // Check if weatherData and weatherData.list are defined
  if (!weatherData || !weatherData.list) {
    return null; // Return null or some fallback UI if data is not available
  }

  const feelsLike = weatherData.list[0]?.main?.feels_like || 'N/A';

  return (
    <ImageBackground
      source={images.background3} 
      style={{ flex: 1 }} 
    >
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal>
        {/* Wind */}
        <View style={styles.column}>
          <View style={styles.blackBackground}>
            <Image source={images.wind} style={styles.windIcon} />
            <Text style={styles.label}>Wind</Text>
            <Text style={styles.value}>{weatherData.list[0]?.wind.speed} m/s</Text>
          </View>
        </View>

        {/* Pressure */}
        <View style={styles.column}>
          <View style={styles.blackBackground}>
            <Image source={images.pressure} style={styles.pressureIcon} />
            <Text style={styles.label}>Pressure</Text>
            <Text style={styles.value}>{weatherData.list[0]?.main.pressure} hPa</Text>
          </View>
        </View>

        {/* Humidity */}
        <View style={styles.column}>
          <View style={styles.blackBackground}>
            <Image source={images.humidityy} style={styles.humidityIcon} />
            <Text style={styles.label}>Humidity</Text>
            <Text style={styles.value}>{weatherData.list[0]?.main.humidity}%</Text>
          </View>
        </View>

        {/* Visibility */}
        <View style={styles.column}>
          <View style={styles.blackBackground}>
            <Image source={images.visibility} style={styles.visibilityIcon} />
            <Text style={styles.label}>Visibility</Text>
            <Text style={styles.value}>{weatherData.list[0]?.visibility} m</Text>
          </View>
        </View>

        {/* Feels Like */}
        <View style={styles.column}>
          <View style={styles.blackBackground}>
            <Image source={images.feels_Like} style={styles.feelsLikeIcon} />
            <Text style={styles.label}>Feels Like</Text>
            <Text style={styles.value}>{weatherData.list[0].main?.feels_like ? `${feelsLike}°C` : 'N/A'}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default WeatherScreenBottom;
