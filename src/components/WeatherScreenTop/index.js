// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ImageBackground,
// } from "react-native";
// import styles from "./style";
// import images from "../../images";
// import { useNavigation } from "@react-navigation/native";
// import { useSelector } from 'react-redux';

// function WeatherScreenTop({ weatherData }) {
//   const [temperatureUnit, setTemperatureUnit] = useState("°C");
//   const navigation = useNavigation();
//   const selectedUnit = useSelector((state) => state.temperatureUnit);
//   // const temperatureUnit = selectedUnit || '°C'; // Default to Celsius


//   useEffect(() => {
//     // Update the temperature unit based on the selectedUnit
//     setTemperatureUnit(selectedUnit ? "°C" : "°F");
//   }, [selectedUnit]);

//   const temperatureInCelsius = weatherData?.list[0]?.main?.temp
//     ? (weatherData?.list[0]?.main.temp - 273.15).toFixed(0)
//     : "N/A";
//   const weatherDescription = weatherData?.list[0]?.weather[0]?.main || "N/A";

//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   // Format the date and time using the city's timezone
//   const formattedDayTime = new Intl.DateTimeFormat("en-US", {
//     // timeZone: cityTimeZone,
//     weekday: "long",
//     hour: "2-digit",
//     minute: "2-digit",
//   }).format(currentDateTime);

//   const weatherImages = {
//     Clear: images.clear,
//     Clouds: images.clouds,
//     Rain: images.rain,
//   };

//   return (
//     //   <ImageBackground
//     //   source={images.backgroundd}
//     //   style={{ flex: 1 }}
//     // >
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image
//           source={weatherImages[weatherDescription] || images.default}
//           style={styles.weatherImage}
//         />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.cityName}>{weatherData?.city?.name}</Text>
//         <Text style={styles.temperature}>
//           {temperatureInCelsius}
//           {temperatureUnit}
//           <Text style={styles.weatherDescription}> {weatherDescription}</Text>
//         </Text>
//         <Text style={styles.dateTime}>{formattedDayTime}</Text>
//       </View>
//     </View>
//     // </ImageBackground>
//   );
// }

// export default WeatherScreenTop;


//  fahrenheit without unit

// import React, { useEffect, useState } from "react";
// import { View, Text, Image, ImageBackground } from "react-native";
// import styles from "./style";
// import images from "../../images";
// import { useNavigation } from "@react-navigation/native";
// import { useSelector } from 'react-redux';

// function WeatherScreenTop({ weatherData }) {
//   const navigation = useNavigation();
//   const selectedUnit = useSelector((state) => state.temperatureUnit?.unit);

//   const temperatureInCelsius = weatherData?.list[0]?.main?.temp
//     ? (weatherData?.list[0]?.main.temp - 273.15).toFixed(0)
//     : "N/A";

//   const temperatureInFahrenheit = weatherData?.list[0]?.main?.temp
//     ? (((weatherData?.list[0]?.main.temp - 273.15) * 9/5) + 32).toFixed(0)
//     : "N/A";

//   const weatherDescription = weatherData?.list[0]?.weather[0]?.main || "N/A";

//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   // Format the date and time using the city's timezone
//   const formattedDayTime = new Intl.DateTimeFormat("en-US", {
//     // timeZone: cityTimeZone,
//     weekday: "long",
//     hour: "2-digit",
//     minute: "2-digit",
//   }).format(currentDateTime);

//   const weatherImages = {
//     Clear: images.clear,
//     Clouds: images.clouds,
//     Rain: images.rain,
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image
//           source={weatherImages[weatherDescription] || images.default}
//           style={styles.weatherImage}
//         />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.cityName}>{weatherData?.city?.name}</Text>
//         <Text style={styles.temperature}>
//           {selectedUnit === '°C' ? temperatureInCelsius : temperatureInFahrenheit}
//           {selectedUnit}
//           <Text style={styles.weatherDescription}> {weatherDescription}</Text>
//         </Text>
//         <Text style={styles.dateTime}>{formattedDayTime}</Text>
//       </View>
//     </View>
//   );
// }

// export default WeatherScreenTop;





import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./style";
import images from "../../images";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setTemperatureUnit } from "../../redux/Actions";

function WeatherScreenTop({ weatherData }) {
  const navigation = useNavigation();
  const selectedUnit = useSelector((state) => state.temperatureUnit?.unit);
  const [currentTemperature, setCurrentTemperature] = useState("N/A");
  const dispatch = useDispatch();

   // Function to convert temperature based on the selected unit
const convertTemperature = (temp, unit) => {
  if (unit === '°F') {
    // Convert from Celsius to Fahrenheit
    return `${(temp * 9) / 5 + 32}°F`;
  }
  // Leave the temperature as Celsius (default)
  return `${temp}°C`;
};


 // Update the temperature whenever the selected unit or weather data changes
 useEffect(() => {
  if (weatherData) {
    const temperatureInCelsius = (weatherData?.list[0]?.main.temp - 273.15).toFixed(0);
    const formattedTemperature = convertTemperature(temperatureInCelsius, selectedUnit);
    setCurrentTemperature(formattedTemperature);
  }
}, [selectedUnit, weatherData]);

  const weatherDescription = weatherData?.list[0]?.weather[0]?.main || "N/A";
;

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  useEffect(() => {
    // Check AsyncStorage for the selected unit, use °C as the default if not found
    const fetchTemperatureUnit = async () => {
      try {
        const storedUnit = await AsyncStorage.getItem('temperatureUnit');
        if (storedUnit) {
          // Dispatch the action to update the selected unit in the Redux store
          dispatch(setTemperatureUnit(storedUnit));
        }
      } catch (error) {
        console.error('Error fetching temperature unit from local storage:', error);
      }
    };
  
    fetchTemperatureUnit();
  }, []);

  // Format the date and time using the city's timezone
  const formattedDayTime = new Intl.DateTimeFormat("en-US", {
    // timeZone: cityTimeZone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(currentDateTime);

  const weatherImages = {
    Clear: images.clear,
    Clouds: images.clouds,
    Rain: images.rain,
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={weatherImages[weatherDescription] || images.default}
          style={styles.weatherImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cityName}>{weatherData?.city?.name}</Text>
        <Text style={styles.temperature}>
          {currentTemperature}
          {selectedUnit}
          <Text style={styles.weatherDescription}> {weatherDescription}</Text>
        </Text>
        <Text style={styles.dateTime}>{formattedDayTime}</Text>
      </View>
    </View>
  );
}

export default WeatherScreenTop;

