// import { StyleSheet, useWindowDimensions } from 'react-native'; // Import useWindowDimensions
// import { Feather } from '@expo/vector-icons';
// import { TextInput, View } from 'react-native';
// import { useState } from 'react';
// import styles from './style';

// const SearchBar = (props) => {
//   const [name, setName] = useState('');

//   function cityNameHandler(cityName) {
//     setName(cityName);
//   }

//   function nameEnterHandler() {
//     props.cityName(name);
//   }

//   const windowWidth = useWindowDimensions().width; // Get screen width using useWindowDimensions

//   return (
//     <View style={[styles.searchBar, { width: windowWidth }]}>
//       <TextInput placeholder='Enter Your City' onChangeText={cityNameHandler} />
//       <Feather name="search" size={24} color="black" onPress={nameEnterHandler} />
//     </View>
//   );
// }

// export default SearchBar;
