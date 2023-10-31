import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

const FavoritesList = ({ favoriteCities }) => {
  return (
    <View>
      <Text>Favorite Cities:</Text>
      <FlatList
        data={favoriteCities}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  favoriteCities: state.favoriteCities,
});

export default connect(mapStateToProps)(FavoritesList)