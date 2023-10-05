import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import favouritesStyles from './favouritesStyles';

const Favorites = () => {
  const favoriteCities = useSelector((state) => state.favoriteCities);

  const renderItem = ({ item }) => (
    <View key={item.cityName} style={favouritesStyles.favoriteCityContainer}>
      <Text>{item.cityName}</Text>
      <Text>{item.temperature}°C</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={favouritesStyles.container}>
        <Text style={favouritesStyles.title}>Favorite Cities</Text>
        <FlatList
          data={favoriteCities}
          renderItem={renderItem}
          keyExtractor={(item) => item.cityName}
        />
      </View>
    </ScrollView>
  );
};

export default Favorites;


// // Favorites.js
// import React from 'react';
// import { View, Text } from 'react-native';

// const Favorites = () => {
//   // Fetch and display your list of favorites here
//   return (
//     <View>
//       <Text>List of Favorites</Text>
//     </View>
//   );
// };

// export default Favorites;
