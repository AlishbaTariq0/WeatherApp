// // working file weather search bar

// import React, { useState } from 'react';
// import { View, TextInput, useWindowDimensions, TouchableOpacity, ImageBackground, Text } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import images from '../../images';
// import styles from './style';
// import { connect } from 'react-redux';
// import { toggleSearchBar, addFavoriteCity } from '../../redux/Actions/actionType';
// import { fetchWeatherRequest } from '../../redux/Actions';
// import { useDispatch } from 'react-redux';

// const SearchBar = (props) => {
//   const [name, setName] = useState('');
//   const dispatch = useDispatch();

//   const cityNameHandler = (cityName) => {
//     setName(cityName);
//   };

//   const nameEnterHandler = () => {
//     if (name) {
//       try {
//         props.navigation.navigate('Weather', { cityName: name });
//       } catch (error) {
//         console.error('Navigation error:', error);
//       }
//     } else {
//       // Handle the case when 'name' is empty
//     }
//   };

//   const addToFavorites = () => {
//     // Dispatch the action to add the city to favorites
//     props.addFavoriteCity(name);
//   };

//   const windowWidth = useWindowDimensions().width;

//   return (
//     <ImageBackground
//       source={images.backgroundd}
//       style={{ flex: 1 }}
//     >
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Text style={{ color: 'white', fontSize: 40, marginTop: 20, marginLeft: 5 }}>Weather</Text>
//         {/* Dropdown button with three dots */}
//         <TouchableOpacity
//           onPress={() => {
//             // Handle dropdown menu here
//           }}
//           style={{
//             padding: 10,
//             marginRight: 10,
//           }}
//         >
//           <Feather name="more-horizontal" size={30} color="white" marginTop={20} />
//         </TouchableOpacity>
//       </View>
//       <View style={[styles.searchBar, { width: windowWidth }]}>
//         <TextInput style={styles.searchInput} placeholder="Enter Your City" onChangeText={cityNameHandler} />
//         <TouchableOpacity style={styles.searchButton} onPress={nameEnterHandler}>
//           <Feather name="search" size={26} color="gold" />
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const mapStateToProps = (state) => ({
//   isSearchBarVisible: state.isSearchBarVisible,
// });

// const mapDispatchToProps = {
//   toggleSearchBar,
//   addFavoriteCity,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

//  correct for displaying dropdown box

// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   useWindowDimensions,
//   TouchableOpacity,
//   ImageBackground,
//   Text,
//   Modal,
//   FlatList,
// } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import images from '../../images';
// import styles from './style';
// import { connect } from 'react-redux';
// import { toggleSearchBar, addFavoriteCity } from '../../redux/Actions/actionType';
// import { fetchWeatherRequest } from '../../redux/Actions';
// import { useDispatch } from 'react-redux';

// const SearchBar = (props) => {
//   const [name, setName] = useState('');
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false); // To control the dropdown visibility
//   const dispatch = useDispatch();

//   const cityNameHandler = (cityName) => {
//     setName(cityName);
//   };

//   const nameEnterHandler = () => {
//     if (name) {
//             try {
//               props.navigation.navigate('Weather', { cityName: name });
//             } catch (error) {
//               console.error('Navigation error:', error);
//             }
//           } else {
//             // Handle the case when 'name' is empty
//           }
//           };

//   const addToFavorites = () => {
//     // Dispatch the action to add the city to favorites
//     props.addFavoriteCity(name);
//   };

//   const windowWidth = useWindowDimensions().width;

//   // Define your list of favorite cities
//   const favoriteCities = ['City1', 'City2', 'City3']; // Replace with your actual data

//   return (
//     <ImageBackground source={images.backgroundd} style={{ flex: 1 }}>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Text style={{ color: 'white', fontSize: 40, marginTop: 20, marginLeft: 5 }}>Weather</Text>
//         {/* Dropdown button with three dots */}
//         <TouchableOpacity
//           onPress={() => setIsDropdownVisible(true)}
//           style={{
//             padding: 10,
//             marginRight: 10,
//           }}
//         >
//           <Feather name="more-horizontal" size={30} color="white" marginTop={20} />
//         </TouchableOpacity>
//       </View>
//       <View style={[styles.searchBar, { width: windowWidth }]}>
//         <TextInput style={styles.searchInput} placeholder="Enter Your City" onChangeText={cityNameHandler} />
//         <TouchableOpacity style={styles.searchButton} onPress={nameEnterHandler}>
//           <Feather name="search" size={26} color="gold" />
//         </TouchableOpacity>
//       </View>

//       {/* Modal for the dropdown menu */}
//       <Modal
//   visible={isDropdownVisible}
//   transparent={true}
//   animationType="slide"
// >
//   <View style={styles.modalContainer}>
//     <View style={styles.dropdownContainer}>
//       <Text style={styles.dropdownTitle}>Favorite Cities</Text>
//       <FlatList
//         data={favoriteCities}
//         keyExtractor={(item) => item}
//         renderItem={({ item }) => (
//           <Text style={styles.favoriteCityText}>{item}</Text>
//         )}
//       />
//       <TouchableOpacity onPress={() => setIsDropdownVisible(false)}>
//         <Text style={styles.closeButtonText}>Close</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// </Modal>

//     </ImageBackground>
//   );
// };

// const mapStateToProps = (state) => ({
//   isSearchBarVisible: state.isSearchBarVisible,
// });

// const mapDispatchToProps = {
//   toggleSearchBar,
//   addFavoriteCity,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

// correct for displaying cities under searchbar

// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   useWindowDimensions,
//   TouchableOpacity,
//   ImageBackground,
//   Text,
//   Modal,
//   FlatList,
// } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import images from '../../images';
// import styles from './style';
// import { connect } from 'react-redux';
// import { toggleSearchBar, addFavoriteCity } from '../../redux/Actions/actionType';
// import { fetchWeatherRequest } from '../../redux/Actions';
// import { useDispatch } from 'react-redux';

// const SearchBar = (props) => {
//   const [name, setName] = useState('');
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false); // To control the dropdown visibility
//   const dispatch = useDispatch();

//   const cityNameHandler = (cityName) => {
//     setName(cityName);
//   };

//   const nameEnterHandler = () => {
//     if (name) {
//       try {
//         props.navigation.navigate('Weather', { cityName: name });
//       } catch (error) {
//         console.error('Navigation error:', error);
//       }
//     } else {
//       // Handle the case when 'name' is empty
//     }
//   };

//   const addToFavorites = () => {
//     // Dispatch the action to add the city to favorites
//     props.addFavoriteCity(name);
//   };

//   const windowWidth = useWindowDimensions().width;

//   // Define your list of favorite cities
//   const favoriteCities = ['City1', 'City2', 'City3']; // Replace with your actual data

//   // Weather information
//   const weatherInfo = 'Lahore: 30°C';

//   return (
//     <ImageBackground source={images.backgroundd} style={{ flex: 1 }}>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Text style={{ color: 'white', fontSize: 40, marginTop: 20, marginLeft: 5 }}>Weather</Text>
//         {/* Dropdown button with three dots */}
//         <TouchableOpacity
//           onPress={() => setIsDropdownVisible(true)}
//           style={{
//             padding: 10,
//             marginRight: 10,
//           }}
//         >
//           <Feather name="more-horizontal" size={30} color="white" marginTop={20} />
//         </TouchableOpacity>
//       </View>
//       <View style={[styles.searchBar, { width: windowWidth }]}>
//         <TextInput style={styles.searchInput} placeholder="Enter Your City" onChangeText={cityNameHandler} />
//         <TouchableOpacity style={styles.searchButton} onPress={nameEnterHandler}>
//           <Feather name="search" size={26} color="gold" />
//         </TouchableOpacity>
//       </View>

//       {/* Display weather information under the search bar */}
//       <View style={styles.weatherInfoContainer}>
//         <Text style={styles.weatherInfoText}>{weatherInfo}</Text>
//       </View>

//       {/* Modal for the dropdown menu */}
//       <Modal
//         visible={isDropdownVisible}
//         transparent={true}
//         animationType="slide"
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.dropdownContainer}>
//             <Text style={styles.dropdownTitle}>Favorite Cities</Text>
//             <FlatList
//               data={favoriteCities}
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <Text style={styles.favoriteCityText}>{item}</Text>
//               )}
//             />
//             <TouchableOpacity onPress={() => setIsDropdownVisible(false)}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </ImageBackground>
//   );
// };

// const mapStateToProps = (state) => ({
//   isSearchBarVisible: state.isSearchBarVisible,
// });

// const mapDispatchToProps = {
//   toggleSearchBar,
//   addFavoriteCity,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);444

//  correct displaying fav cities
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   TextInput,
//   useWindowDimensions,
//   TouchableOpacity,
//   ImageBackground,
//   Text,
//   Modal,
//   FlatList,
// } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import images from "../../images";
// import styles from "./style";
// import { connect } from "react-redux";
// import {
//   toggleSearchBar,
//   addFavoriteCity,
// } from "../../redux/Actions/actionType";
// import { fetchWeatherData } from "../../helper/api";
// import { useDispatch } from "react-redux";

// const SearchBar = (props) => {
//   const [name, setName] = useState("");
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//   const [weatherInfo, setWeatherInfo] = useState("");
//   const dispatch = useDispatch();
//   const [favoriteCitiesWeather, setFavoriteCitiesWeather] = useState([]); // To store favorite cities' weather

//   const cityNameHandler = (cityName) => {
//     setName(cityName);
//   };

//   const nameEnterHandler = async () => {
//     if (name) {
//       try {
//         const data = await fetchWeatherData(name);
//         console.log("Weather Data:", data); // Log the data to understand its structure

//         // Assuming that your API returns temperature data, adjust this line accordingly.
//         const temperature = data?.list[0]?.main?.temp;
//         const description = data?.list[0]?.weather[0]?.main;

//         // Set the weather information
//         setWeatherInfo(`${name}: ${temperature}°C, ${description}`);

//         // Add this city's weather to the list of favorite cities' weather
//         setFavoriteCitiesWeather((prevWeather) => [
//           ...prevWeather,
//           { city: name, temperature, description },
//         ]);

//         props.navigation.navigate("Weather", { cityName: name });
//       } catch (error) {
//         console.error("Navigation error:", error);
//       }
//     } else {
//       // Handle the case when 'name' is empty
//     }
//   };

//   const addToFavorites = () => {
//     // Dispatch the action to add the city to favorites
//     props.addFavoriteCity(name);
//   };

//   const windowWidth = useWindowDimensions().width;

//   // Define your list of favorite cities
//   const favoriteCities = ["Lahore", "Karachi", "Islamabad"];

//   return (
//     <ImageBackground source={images.backgroundd} style={{ flex: 1 }}>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Text
//           style={{ color: "white", fontSize: 40, marginTop: 20, marginLeft: 5 }}
//         >
//           Weather
//         </Text>
//         {/* Dropdown button with three dots */}
//         <TouchableOpacity
//           onPress={() => setIsDropdownVisible(true)}
//           style={{
//             padding: 10,
//             marginRight: 10,
//           }}
//         >
//           <Feather
//             name="more-horizontal"
//             size={30}
//             color="white"
//             marginTop={20}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={[styles.searchBar, { width: windowWidth }]}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Enter Your City"
//           onChangeText={cityNameHandler}
//         />
//         <TouchableOpacity
//           style={styles.searchButton}
//           onPress={nameEnterHandler}
//         >
//           <Feather name="search" size={26} color="gold" />
//         </TouchableOpacity>
//       </View>

//       {/* Display favorite cities' weather in separate boxes */}
//       <View style={styles.favoriteCitiesContainer}>
//         {favoriteCitiesWeather.map((cityWeather, index) => (
//           <View key={index} style={styles.favoriteCityBox}>
//             <Text style={styles.favoriteCityText}>{cityWeather.city}</Text>
//             <Text
//               style={styles.favoriteCityText}
//             >{`${cityWeather.temperature}°C`}</Text>
//             <Text style={styles.favoriteCityText}>
//               {cityWeather.description}
//             </Text>
//           </View>
//         ))}
//       </View>

//       {/* Modal for the dropdown menu */}
//       <Modal
//         visible={isDropdownVisible}
//         transparent={true}
//         animationType="slide"
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.dropdownContainer}>
//             <Text style={styles.dropdownTitle}>Favourites</Text>
//             <FlatList
//               data={favoriteCities}
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <Text style={styles.favoriteCityText}>{item}</Text>
//               )}
//             />
//             <TouchableOpacity onPress={() => setIsDropdownVisible(false)}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </ImageBackground>
//   );
// };

// const mapStateToProps = (state) => ({
//   isSearchBarVisible: state.isSearchBarVisible,
// });

// const mapDispatchToProps = {
//   toggleSearchBar,
//   addFavoriteCity,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);



  // auto add

  // const nameEnterHandler = async () => {
  //   if (name) {
  //     try {
  //       const data = await fetchWeatherData(name);
  //       console.log("Weather Data:", data);

  //       // const temperature = data?.list[0]?.main?.temp;
  //       const description = data?.list[0]?.weather[0]?.main;
  //       // const feelsLike = data?.list[0]?.main?.feels_like; // Fetch "feels like" temperature

  //       const temperatureInCelsius = data?.list[0]?.main?.temp
  //         ? (data?.list[0]?.main.temp - 273.15).toFixed(0)
  //         : "N/A";

  //       const feelsLikeInCelsius = data?.list[0]?.main?.feels_like
  //         ? (data?.list[0]?.main.feels_like - 273.15).toFixed(0)
  //         : "N/A";

  //       setWeatherInfo(
  //         `${name}: ${temperatureInCelsius}°C, ${description},  Feels Like: ${feelsLikeInCelsius}°C`
  //       );

  //       setFavoriteCitiesWeather((prevWeather) => [
  //         ...prevWeather,
  //         {
  //           city: name,
  //           temperature: temperatureInCelsius,
  //           description,
  //           feelsLike: feelsLikeInCelsius,
  //         },
  //       ]);

  //       // Update favoriteCities list
  //       setFavoriteCities((prevCities) => [...prevCities, name]);

  //       // Navigate to the Weather screen
  //       props.navigation.navigate("Weather", { cityName: name });
  //     } catch (error) {
  //       console.error("Navigation error:", error);
  //     }
  //   } else {
  //     // Handle the case when 'name' is empty
  //   }
  // };




// correct

import React, { useState, useEffect , useRef} from "react";
import {
  View,
  TextInput,
  useWindowDimensions,
  TouchableOpacity,
  ImageBackground,
  Text,
  Modal,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import images from "../../images";
import styles from "./style";
import { connect } from "react-redux";
import {
  toggleSearchBar,
  addFavoriteCity,
} from "../../redux/Actions/actionType";
import { fetchWeatherData } from "../../helper/api";
import { useDispatch } from "react-redux";
import Swipeout from "react-native-swipeout";
import { removeFavoriteCity } from "../../redux/Actions";

const SearchBar = (props) => {
  const [name, setName] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState("");
  const dispatch = useDispatch();
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [favoriteCitiesWeather, setFavoriteCitiesWeather] = useState([]);
  const textInputRef = useRef();

  const cityNameHandler = (cityName) => {
    setName(cityName);
  };


  //  no auto add
  const nameEnterHandler = async () => {
    if (name) {
      try {
        const data = await fetchWeatherData(name);
        console.log("Weather Data:", data);
  
        const description = data?.list[0]?.weather[0]?.main;
        const temperatureInCelsius = data?.list[0]?.main?.temp
          ? (data?.list[0]?.main.temp - 273.15).toFixed(0)
          : "N/A";
  
        const feelsLikeInCelsius = data?.list[0]?.main?.feels_like
          ? (data?.list[0]?.main.feels_like - 273.15).toFixed(0)
          : "N/A";
  
        setWeatherInfo(
          `${name}: ${temperatureInCelsius}°C, ${description},  Feels Like: ${feelsLikeInCelsius}°C`
        );
  
        // Update favoriteCities list
        setFavoriteCities((prevCities) => [...prevCities, name]);
  
        // Navigate to the Weather screen
        props.navigation.navigate("Weather", { cityName: name });
      } catch (error) {
        console.error("Navigation error:", error);
      }
    } else {
      // Handle the case when 'name' is empty
    }
  };
  

  // const addToFavorites = () => {
  //   props.addFavoriteCity(name);
  // };

  const addToFavorites = (cityName) => {
    // Add the city to the favorite list
    setFavoriteCities((prevCities) => [...prevCities, cityName]);
  };


  // Add the onClick handler for removing the city
  const removeFavoriteCityHandler = (cityName) => {
    console.log(`Removing city: ${cityName}`);
    // Filter out the city to be removed
    setFavoriteCitiesWeather((prevWeather) =>
      prevWeather.filter((cityWeather) => cityWeather.city !== cityName)
    );
    // Call the action to remove it from Redux state if needed
    props.removeFavoriteCity(cityName);
  };

  const windowWidth = useWindowDimensions().width;

  // const favoriteCities = ["Lahore", "Karachi", "Islamabad"];

  return (
    <ImageBackground source={images.backgroundd} style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => textInputRef.current.focus()}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={() => textInputRef.current.focus()} 
      >
        <Text
          style={{ color: "white", fontSize: 40, marginTop: 20, marginLeft: 5 }}
        >
          Weather
        </Text>
        <TouchableOpacity
          onPress={() => setIsDropdownVisible(true)}
          style={{
            padding: 10,
            marginRight: 10,
          }}
        >
          <Feather
            name="more-horizontal"
            size={30}
            color="white"
            marginTop={20}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.searchBar, { width: windowWidth }]}>

        <TextInput
          ref={textInputRef}
          style={styles.searchInput}
          placeholder="Enter Your City"
          onChangeText={cityNameHandler}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={nameEnterHandler}
        >
          <Feather name="search" size={26} color="gold" />
        </TouchableOpacity>
   </View>
  

    {/* Modal for the dropdown menu  */}
<Modal
  visible={isDropdownVisible}
  transparent={true}
  animationType="slide"
>
  <View style={styles.modalContainer}>
    <View style={styles.dropdownContainer}>
      <Text style={styles.dropdownTitle}>Favourites</Text>
      <FlatList
        data={favoriteCities}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={styles.favoriteCityText}>{item}</Text>
        )}
      />
      <TouchableOpacity onPress={() => setIsDropdownVisible(false)}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

      <ScrollView>
        {favoriteCitiesWeather.map((cityWeather, index) => (
          <View style={styles.swipeoutContainerStyle}>
          <Swipeout
            style={[styles.swipeout, styles.swipeoutStyle]}
            key={index}
            onClose={() => setIsDropdownVisible(false)} // Close dropdown when swipeout item is closed
            right={[
              {
                text: (
                  <View style={styles.removeButtonContainer}>
                    <Text
                      style={[styles.removeOptionText, styles.removeButton]}
                      onPress={() =>
                        removeFavoriteCityHandler(cityWeather.city)
                      }
                    >
                      Remove
                    </Text>
                  </View>
                ),
              },
            ]}
          >
            <View style={styles.favoriteCityBox}>
              <Text style={styles.cityNameText}>{cityWeather.city}</Text>
              <Text style={styles.temperatureText}>
                {`${cityWeather.temperature}°C, ${cityWeather.description}`}
              </Text>
              {cityWeather.feelsLike && (
                <Text style={styles.feelsLikeText}>
                  Feels Like: {`${cityWeather.feelsLike}°C`}
                </Text>
              )}
              <Image
                source={images[cityWeather.description.toLowerCase()]}
                style={{
                  width: 70,
                  height: 70,
                  marginLeft: 275,
                  marginVertical: -85,
                }}
              />
            </View>
          </Swipeout>
          </View>
        ))}
      </ScrollView>
      </TouchableOpacity>
    </ImageBackground>
   
  );
};

const mapStateToProps = (state) => ({
  isSearchBarVisible: state.isSearchBarVisible,
  favoriteCities: state.favoriteCities.favoriteCities,
});

const mapDispatchToProps = {
  toggleSearchBar,
  addFavoriteCity,
  removeFavoriteCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

