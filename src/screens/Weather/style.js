import { StyleSheet, Dimensions } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },

  deg: {
    fontSize: 80,
    textAlign: 'center',
    marginTop: '30%',
    color: 'white'
  },

  cityName: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },

  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 50,
    height: '50%',
    alignItems: 'center',
  },

  temp: {
    backgroundColor: 'black',
    color: 'white',
    padding: 20,
    borderRadius: 5,
    color: 'white'
  },

  backgroundWrapper: {
    position: 'relative',
  },

  background_s: {
    backgroundColor: 'black',
    width: '90%',
    height: 150,
    position: 'absolute',
    top: 110,
    borderRadius: 5,
    opacity: 0.5
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Adjust this to 'contain' if needed
    justifyContent: 'center', // You can adjust this to 'flex-start', 'flex-end', or 'space-between' as needed
  },

  settingsIcon: {
    height: wp(6),
    width: wp(7),
    marginTop: wp(10),
    resizeMode: 'contain',
    // backgroundColor: 'blue',
    marginLeft: wp(80),
    tintColor: 'black'
  },

  screenTitle: {
    // backgroundColor: 'white',
    fontSize: wp(5.5),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: wp(10),
    marginBottom: wp(2),
    color: 'white'
  },

  weekcontainer: {
      // marginTop: wp(5),
      // backgroundColor: 'white',
      color: 'white'
  },

 
});

export default styles;