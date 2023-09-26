// FavouritesList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import favouritesStyles from './favouritesStyles';

const FavouritesList = ({ favorites, removeFromFavorites }) => {
  return (
    <View>
      <Text style={favouritesStyles.title}>Favorites Page</Text>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <View style={favouritesStyles.listItem}>
            <Text style={favouritesStyles.locationName}>{item.name}</Text>
            <TouchableOpacity
              style={favouritesStyles.removeButton}
              onPress={() => removeFromFavorites(item.id)}
            >
              <Text style={favouritesStyles.buttonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FavouritesList;
