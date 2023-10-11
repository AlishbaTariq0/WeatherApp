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

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);




import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  useWindowDimensions,
  TouchableOpacity,
  ImageBackground,
  Text,
  Modal,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import images from '../../images';
import styles from './style';
import { connect } from 'react-redux';
import { toggleSearchBar, addFavoriteCity } from '../../redux/Actions/actionType';
import { fetchWeatherData } from '../../helper/api';
import { useDispatch } from 'react-redux';

const SearchBar = (props) => {
  const [name, setName] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState('');
  const dispatch = useDispatch();
  const [favoriteCitiesWeather, setFavoriteCitiesWeather] = useState([]); // To store favorite cities' weather

  const cityNameHandler = (cityName) => {
    setName(cityName);
  };

  const nameEnterHandler = async () => {
    if (name) {
      try {
        const data = await fetchWeatherData(name);
        console.log('Weather Data:', data); // Log the data to understand its structure

        // Assuming that your API returns temperature data, adjust this line accordingly.
        const temperature = data?.list[0]?.main?.temp;

        // Set the weather information
        setWeatherInfo(`${name}: ${temperature}°C`);

        // Add this city's weather to the list of favorite cities' weather
        setFavoriteCitiesWeather((prevWeather) => [
          ...prevWeather,
          { city: name, temperature },
        ]);

        props.navigation.navigate('Weather', { cityName: name });
      } catch (error) {
        console.error('Navigation error:', error);
      }
    } else {
      // Handle the case when 'name' is empty
    }
  };

  const addToFavorites = () => {
    // Dispatch the action to add the city to favorites
    props.addFavoriteCity(name);
  };

  const windowWidth = useWindowDimensions().width;

  // Define your list of favorite cities
  const favoriteCities = ['Lahore', 'Karachi', 'Islamabad'];

  return (
    <ImageBackground source={images.backgroundd} style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 40, marginTop: 20, marginLeft: 5 }}>Weather</Text>
        {/* Dropdown button with three dots */}
        <TouchableOpacity
          onPress={() => setIsDropdownVisible(true)}
          style={{
            padding: 10,
            marginRight: 10,
          }}
        >
          <Feather name="more-horizontal" size={30} color="white" marginTop={20} />
        </TouchableOpacity>
      </View>
      <View style={[styles.searchBar, { width: windowWidth }]}>
        <TextInput style={styles.searchInput} placeholder="Enter Your City" onChangeText={cityNameHandler} />
        <TouchableOpacity style={styles.searchButton} onPress={nameEnterHandler}>
          <Feather name="search" size={26} color="gold" />
        </TouchableOpacity>
      </View>

      {/* Display weather information under the search bar */}
      {/* <View style={styles.weatherInfoContainer}>
        <Text style={styles.weatherInfoText}>{weatherInfo}</Text>
      </View> */}

      {/* Display favorite cities' weather under one another
      <View style={styles.favoriteCitiesWeatherContainer}>
        {favoriteCitiesWeather.map((cityWeather, index) => (
          <Text key={index} style={styles.favoriteCityText}>
            {`${cityWeather.city}: ${cityWeather.temperature}°C`}
          </Text>
        ))}
      </View> */}

      {/* Display favorite cities' weather in separate boxes */}
<View style={styles.favoriteCitiesContainer}>
  {favoriteCitiesWeather.map((cityWeather, index) => (
    <View key={index} style={styles.favoriteCityBox}>
      <Text style={styles.favoriteCityText}>{cityWeather.city}</Text>
      <Text style={styles.favoriteCityText}>{`${cityWeather.temperature}°C`}</Text>
    </View>
  ))}
</View>


      {/* Modal for the dropdown menu */}
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
    </ImageBackground>
  );
};

const mapStateToProps = (state) => ({
  isSearchBarVisible: state.isSearchBarVisible,
});

const mapDispatchToProps = {
  toggleSearchBar,
  addFavoriteCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
