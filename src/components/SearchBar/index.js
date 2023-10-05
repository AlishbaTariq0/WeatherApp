// import React, { useState } from 'react';
// import { View, TextInput, useWindowDimensions, TouchableOpacity, ImageBackground, Text } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import images from '../../images';
// import styles from './style';
// import { connect } from 'react-redux';
// import { toggleSearchBar, addFavoriteCity } from '../../redux/Actions/actionType';


// const SearchBar = (props) => {
//   const [name, setName] = useState('');

//   const cityNameHandler = (cityName) => {
//     setName(cityName);
//   };

//   const nameEnterHandler = () => {
//     // Check if the 'name' is empty before navigating
//     if (name) {
//       // Navigate to the Weather screen when search is submitted
//       props.navigation.navigate('Weather', { cityName: name });
//     } else {
//       // Handle the case when 'name' is empty (optional)
//     }
//   };
  

//   const addToFavorites = () => {
//     // Dispatch the action to add the city to favorites
//     props.addFavoriteCity(name);
//   };

//   const windowWidth = useWindowDimensions().width;

//   return (
//     <ImageBackground
//         source={images.backgroundd} 
//         style={{ flex: 1 }} 
//       >
// <Text style={{ color: 'white', fontSize: 40, marginTop: 20, marginLeft: 5 }}>Weather</Text>
//     <View style={[styles.searchBar, { width: windowWidth }]}>
//       <TextInput style={styles.searchInput} placeholder="Enter Your City" onChangeText={cityNameHandler} />
//       <TouchableOpacity style={styles.searchButton} onPress={nameEnterHandler}>
//         <Feather name="search" size={26} color="gold" />
//       </TouchableOpacity>
//     </View>
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


// working file weather search bar

import React, { useState } from 'react';
import { View, TextInput, useWindowDimensions, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import images from '../../images';
import styles from './style';
import { connect } from 'react-redux';
import { toggleSearchBar, addFavoriteCity } from '../../redux/Actions/actionType';
import { fetchWeatherRequest } from '../../redux/Actions';
import { useDispatch } from 'react-redux';


const SearchBar = (props) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const cityNameHandler = (cityName) => {
    setName(cityName);
  };

  const nameEnterHandler = () => {
    if (name) {
      try {
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

  return (
    <ImageBackground
      source={images.backgroundd}
      style={{ flex: 1 }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 40, marginTop: 20, marginLeft: 5 }}>Weather</Text>
        {/* Dropdown button with three dots */}
        <TouchableOpacity
          onPress={() => {
            // Handle dropdown menu here
          }}
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
