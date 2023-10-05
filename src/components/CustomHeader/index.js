// CustomHeader.js

import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import images from '../../images';
import styles from './style';

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('FavoriteCities')}>
        <Image source={images.favourites} style={styles.favouritesIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image source={images.settings} style={styles.settingsIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;


