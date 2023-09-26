
//  without animation code

// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import styles from './style'; 
// import images from '../../images'; 

// // Define the formatTime function before using it
// const formatTime = (timestamp) => {
//   const date = new Date(timestamp);
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const amOrPm = hours >= 12 ? 'PM' : 'AM';
//   const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
//   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
//   return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
// };

// const SunriseSunset = ({ weatherData }) => {
//   // Extract sunrise and sunset times from the weatherData prop
//   const sunriseTimestamp = weatherData.city.sunrise * 1000;
//   const sunsetTimestamp = weatherData.city.saunset * 1000;

//   // Format sunrise and sunset times
//   const sunriseTime = formatTime(sunriseTimestamp);
//   const sunsetTime = formatTime(sunsetTimestamp);

//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <Image source={images.sunrise} style={styles.sunriseImage} /> 
//         <Text style={styles.sunriseText}>Sunrise</Text>
//         <Text style={styles.sunriseTime}>{sunriseTime}</Text>
//       </View>
//       <View style={styles.box}>
//         <Image source={images.sunset} style={styles.sunsetImage} /> 
//         <Text style={styles.sunsetText}>Sunset</Text>
//         <Text style={styles.sunsetTime}>{sunsetTime}</Text>
//       </View>
//     </View>
//   );
// };

// export default SunriseSunset;










//  with animation code 
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import styles from './style';
import images from '../../images';

const SunriseSunset = ({ weatherData }) => {
  const sunriseTimestamp = weatherData.city.sunrise * 1000;
  const sunsetTimestamp = weatherData.city.sunset * 1000;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true, // Use AM/PM format
    }).format(date);
  };

  const sunriseTime = formatTime(sunriseTimestamp);
  const sunsetTime = formatTime(sunsetTimestamp);

  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity is 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Animate to fully opaque
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true, // Add this line for performance
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Animated.View style={[styles.box, { opacity: fadeAnim }]}>
        <Image source={images.sunrise} style={styles.sunriseImage} />
        <Text style={styles.sunriseText}>Sunrise</Text>
        <Text style={styles.sunriseTime}>{sunriseTime}</Text>
      </Animated.View>
      <Animated.View style={[styles.box, { opacity: fadeAnim }]}>
        <Image source={images.sunset} style={styles.sunsetImage} />
        <Text style={styles.sunsetText}>Sunset</Text>
        <Text style={styles.sunsetTime}>{sunsetTime}</Text>
      </Animated.View>
    </Animated.View>
  );
};

export default SunriseSunset;
