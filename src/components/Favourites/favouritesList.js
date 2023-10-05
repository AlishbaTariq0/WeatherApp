// // FavouritesList.js
// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import favouritesStyles from './favouritesStyles';

// const FavouritesList = ({ favorites, removeFromFavorites }) => {
//   return (
//     <View>
//       <Text style={favouritesStyles.title}>Favorites Page</Text>
//       <FlatList
//         data={favorites}
//         renderItem={({ item }) => (
//           <View style={favouritesStyles.listItem}>
//             <Text style={favouritesStyles.locationName}>{item.name}</Text>
//             <TouchableOpacity
//               style={favouritesStyles.removeButton}
//               onPress={() => removeFromFavorites(item.id)}
//             >
//               <Text style={favouritesStyles.buttonText}>Remove</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default FavouritesList;


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