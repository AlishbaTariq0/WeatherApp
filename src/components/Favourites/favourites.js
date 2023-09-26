import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import favouritesStyles from './favouritesStyles';
import FavouritesList from './FavouritesList';

const Favourites = ({ weatherData }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load favorites from AsyncStorage when the component mounts
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const removeFromFavorites = async (locationId) => {
    // Remove a location from favorites and update AsyncStorage
    const updatedFavorites = favorites.filter((fav) => fav.id !== locationId);
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  return (
    <View style={favouritesStyles.container}>
      <Text style={favouritesStyles.title}>Favorites Page</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          {weatherData && (
            <Text style={favouritesStyles.locationName}>
              Lahore Temperature: {weatherData.list[0]?.main?.temp}°C
            </Text>
          )}
          <FavouritesList favorites={favorites} removeFromFavorites={removeFromFavorites} />
        </View>
      )}
    </View>
  );
};

export default Favourites;
