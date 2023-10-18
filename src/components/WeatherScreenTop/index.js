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

function WeatherScreenTop({ weatherData, selectedUnit }) {
  const [temperatureUnit, setTemperatureUnit] = useState("°C");
  const navigation = useNavigation();

  useEffect(() => {
    // Update the temperature unit based on the selectedUnit
    setTemperatureUnit(selectedUnit ? "°C" : "°F");
  }, [selectedUnit]);

  const temperatureInCelsius = weatherData?.list[0]?.main?.temp
    ? (weatherData?.list[0]?.main.temp - 273.15).toFixed(0)
    : "N/A";
  const weatherDescription = weatherData?.list[0]?.weather[0]?.main || "N/A";

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
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
    //   <ImageBackground
    //   source={images.backgroundd}
    //   style={{ flex: 1 }}
    // >
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
          {temperatureInCelsius}
          {temperatureUnit}
          <Text style={styles.weatherDescription}> {weatherDescription}</Text>
        </Text>
        <Text style={styles.dateTime}>{formattedDayTime}</Text>
      </View>
    </View>
    // </ImageBackground>
  );
}

export default WeatherScreenTop;

