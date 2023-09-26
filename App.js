// import { StyleSheet, View, Dimensions, Text } from 'react-native';
// import Weather from './src/screens/Weather';
// import { useState } from 'react';
// import WeatherScreenCenter from './src/components/WeatherScreenCenter';
// import WeatherScreenBottom from './src/components/WeatherScreenBottom';
// import WeatherScreenTop from './src/components/WeatherScreenTop';


// export default function App() {
//   const [savedName, setSavedName] = useState('');

//   function cityNameHandler(cityName) {
//     setSavedName(cityName);
//     }


//   return (
//     <View style={styles.container}>
//        {/* <SearchBar cityName={cityNameHandler} /> */}
//         <Weather cityName={savedName} />
             
//         {/* <Weather/> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: Dimensions.get('screen').width,
//   },
// });







// // App.js (or index.js)
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Weather from './src/screens/Weather'; // Replace with your screen component
// import Settings from './src/components/Settings'; // Replace with your screen component
// import { TouchableOpacity, Image } from 'react-native';
// import images from './src/images';
// import styles from './src/components/Settings/style';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//       <Stack.Screen
//   name="Weather"
//   component={Weather}
//   options={({ navigation }) => ({
//     title: ' ',
//     headerRight: () => (
//       <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
//         <Image source={images.settings} style={styles.settingsIcon} />
//       </TouchableOpacity>
//     ),
//   })}
// />
// <Drawer.Screen name="Favorites" component={FavoritesScreen} />

//         <Stack.Screen name="Settings" component={Settings} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Weather from './src/screens/Weather';
import Settings from './src/components/Settings';
import { TouchableOpacity, Image } from 'react-native';
import images from './src/images';
import styles from './src/components/Settings/style';
import favouritesStyles from './src/components/Favourites/favouritesStyles';
import Favorites from './src/components/Favourites/favourites';

const Stack = createStackNavigator();

export default function App() {
  const [savedName, setSavedName] = useState('');

  function cityNameHandler(cityName) {
    setSavedName(cityName);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather">
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={({ navigation }) => ({
            title: ' ',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                <Image source={images.favourites} style={favouritesStyles.favouritesIcon} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Image source={images.settings} style={styles.settingsIcon} />
              </TouchableOpacity>
            ),
          })}
          initialParams={{ cityName: savedName }}
        />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
