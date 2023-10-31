import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../../redux/Store/store';
import SearchBar from '../SearchBar';
import FavouritesList from '../Favourites/favouritesList';
import Weather from '../../screens/Weather';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <View>
        <h2>App Wrapper</h2>
        <SearchBar />
        <Weather />
        <FavouritesList /> 
      </View>
    </Provider>
  );
};

export default AppWrapper;
