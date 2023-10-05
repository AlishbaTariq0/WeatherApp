import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'; 
import store from './src/redux/Store/store';
import SearchBar from './src/components/SearchBar';
import Weather from './src/screens/Weather';
import FavoriteCities from './src/components/Favourites';
import Settings from './src/components/Settings';

const Stack = createStackNavigator();

function App() {
  return (
    
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SearchBar">
          <Stack.Screen name="SearchBar" component={SearchBar} options={{ headerShown: true }} />
          <Stack.Screen name="Weather" component={Weather} options={{ headerShown: true }} />
          <Stack.Screen name="FavoriteCities" component={FavoriteCities} /> 
          <Stack.Screen name="Settings" component={Settings} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
