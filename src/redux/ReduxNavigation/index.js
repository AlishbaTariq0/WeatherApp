
// correct working code


// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { TouchableOpacity, Image } from 'react-native-gesture-handler';
// import { useSelector } from 'react-redux';
// import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'; // Import getFocusedRouteNameFromRoute
// import images from '../../images';
// import favouritesStyles from '../../components/Favourites/favouritesStyles';
// import Settingsstyles from '../../components/Settings/style';
// import Weather from '../../screens/Weather'; // Import your Weather component
// import Settings from '../../components/Settings';
// import SearchBar from '../../components/SearchBar';
// import Favourites from '../../components/Favourites';

// const Stack = createStackNavigator();

// export const AppNavigator = ({ route }) => {
//   const showFavourites = useSelector((state) => state.app.isSearchBarVisible);
//   const routeName = getFocusedRouteNameFromRoute(route); // Get the currently focused route name

//   return (
//     <Stack.Navigator initialRouteName="SearchBar">
//       <Stack.Screen
//         name="SearchBar"
//         component={SearchBar}
//         options={{ headerShown: false }}
//       />

//       {showFavourites && <Stack.Screen name="Favourites" component={Favourites} />}

//       <Stack.Screen
//   name="Weather"
//   component={Weather}
//   options={({ route }) => {
//     if (routeName === 'Weather') {
//       return {
//         title: ' ',
//         headerLeft: () => (
//           <TouchableOpacity onPress={() => route.params.navigation.toggleDrawer()}>
//             <Image source={images.favourites} style={favouritesStyles.favouritesIcon} />
//           </TouchableOpacity>
//         ),
//         headerRight: () => (
//           <TouchableOpacity onPress={() => route.params.navigation.navigate('Settings')}>
//             <Image source={images.settings} style={Settingsstyles.settingsIcon} />
//           </TouchableOpacity>
//         ),
//       };
//     } else {
//       return {
//         headerShown: false,
//       };
//     }
//   }}
// />

//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// };

// export default function ReduxNavigation() {
//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// }





// import React from 'react';
// import { TouchableOpacity, Image } from 'react-native-gesture-handler';
// import { useSelector } from 'react-redux';
// import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import images from '../../images';
// import favouritesStyles from '../../components/Favourites/favouritesStyles';
// import Settingsstyles from '../../components/Settings/style';
// import Weather from '../../screens/Weather';
// import Settings from '../../components/Settings';
// import SearchBar from '../../components/SearchBar';
// import Favourites from '../../components/Favourites';
// import Navigation from '../../components/Navigation';

// const Stack = createStackNavigator();

// export const AppNavigator = ({ route }) => {
//   const showFavourites = useSelector((state) => state.app.isSearchBarVisible);
//   const routeName = getFocusedRouteNameFromRoute(route);

//   return (
//     <Stack.Navigator initialRouteName="SearchBar">
//       <Stack.Screen
//         name="SearchBar"
//         component={SearchBar}
//         options={{ headerShown: false }}
//       />

//       {showFavourites && <Stack.Screen name="Favourites" component={Favourites} />}

//       <Stack.Screen
//         name="Weather"
//         component={Weather}
//         options={({ route }) => {
//           if (routeName === 'Weather') {
//             return {
//               title: ' ',
//               headerLeft: () => (
//                 <TouchableOpacity onPress={() => route.params.navigation.toggleDrawer()}>
//                   <Image source={images.favourites} style={favouritesStyles.favouritesIcon} />
//                 </TouchableOpacity>
//               ),
//               headerRight: () => (
//                 <TouchableOpacity onPress={() => route.params.navigation.navigate('Settings')}>
//                   <Image source={images.settings} style={Settingsstyles.settingsIcon} />
//                 </TouchableOpacity>
//               ),
//             };
//           } else {
//             return {
//               headerShown: false,
//             };
//           }
//         }}
//       />

//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// };

// export default function ReduxNavigation() {
//   return (
//     <NavigationContainer>
//       <Navigation />
//     </NavigationContainer>
//   );
// }



// ReduxNavigation.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import images from '../../images';
import favouritesStyles from '../../components/Favourites/favouritesStyles';
import Settingsstyles from '../../components/Settings/style';
import Weather from '../../screens/Weather';
import Settings from '../../components/Settings';
import SearchBar from '../../components/SearchBar';
import Favourites from '../../components/Favourites';

const Stack = createStackNavigator();

export const AppNavigator = ({ route }) => {
  const showFavourites = useSelector((state) => state.app.isSearchBarVisible);
  const routeName = getFocusedRouteNameFromRoute(route);

  return (
    <Stack.Navigator initialRouteName="SearchBar">
      <Stack.Screen
        name="SearchBar"
        component={SearchBar}
        options={{ headerShown: false }}
      />

      {showFavourites && <Stack.Screen name="Favourites" component={Favourites} />}

      <Stack.Screen
  name="Weather"
  component={Weather}
  options={({ route, navigation }) => { // Include navigation in options
    if (routeName === 'Weather') {
      return {
        title: ' ',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image source={images.favourites} style={favouritesStyles.favouritesIcon} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <CustomHeader navigation={navigation} /> 
        ),
      };
    } else {
      return {
        headerShown: false,
      };
    }
  }}
/>


      <Stack.Screen name="Settingas" component={Settings} />
    </Stack.Navigator>
  );
};

export default function ReduxNavigation() {
  return (
    <AppNavigator />
  );
}

