import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: wp(0.9),
    backgroundColor:'white', 
    width: wp(100),
    // marginTop: wp()
    // border: wp(2),
    // borderColor: 'black',
    // // borderRadius: wp(1),
    // borderWidth: wp(0.5)
  },
 
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: wp(2), 
    marginTop: wp(5),
    paddingHorizontal: wp(3), // Added horizontal padding
  },

  column: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: wp(1),
  },

  icon: {
    width: wp(10), 
    height: wp(10),
    resizeMode: 'contain',
  },

  label: {
    marginTop: wp(1),
    fontSize: wp(5),
    fontWeight: 'bold',
    color: "black",
  },

  blackBackground: {
    backgroundColor: 'lightblue',
    width: wp(30),
    alignItems: 'center', 
    borderRadius: wp(7),
    borderStyle: 'solid',
    borderWidth: wp(0.1),
    // height: wp(30),
    opacity: wp(0.8), 
    padding: wp(3), 
    marginBottom: wp(5),
  },

  windIcon: {
    width: wp(10),
    height: wp(15),
    resizeMode: "contain",
    tintColor: "black", 
  },

  // Pressure icon style
  pressureIcon: {
    width: wp(11),
    height: wp(15),
    resizeMode: "contain",
    tintColor: "black", 
  },

  // Humidity icon style 
  humidityIcon: {
    width: wp(10),
    height: wp(15),
    resizeMode: "contain",
    // backgroundColor: 'blue'
  },

  // Visibility icon style
  visibilityIcon: {
    width: wp(10.5),
    height: wp(15),
    resizeMode: "contain",
    tintColor: "black", 
  },

  // feels like icon 
  feelsLikeIcon: {
    width: wp(11),
    height: wp(15),
    resizeMode: "contain",
    tintColor: "black", 

  },
 
  value: {
    fontSize: wp(4),
    color: "black", 
   },
});

// const commonIconStyles = {
//   width: wp(15),
//   height: wp(8),
//   resizeMode: "contain",
//   tintColor: "white",
// };

export default styles;
   



 
  
