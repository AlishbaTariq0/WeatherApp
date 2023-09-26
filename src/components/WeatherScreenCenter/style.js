// import { StyleSheet } from "react-native";
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp} from 'react-native-responsive-screen';

// const styles = StyleSheet.create({
//   container: {
//     flex:0.5,
//     backgroundColor:'red',
//     width: wp(100),
//     backgroundColor: 'white',
//     border: wp(2),
//     borderColor: 'black',
//     // borderRadius: wp(1),
//     borderWidth: wp(0.5)
//   },
  
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: wp(1),
//     marginTop: wp(5)
//   },

//   column: {
//     flex: 1,
//     alignItems: 'center',
//   },

//   icon: {
//     width: wp(15),
//     height: wp(8), 
//     resizeMode: 'contain',
//   },

//   label: {
//     // marginTop: wp(2),
//     fontSize: wp(4),
//     fontWeight: 'bold',
//     color: "black",
//   },

//   blackBackground: {
//     backgroundColor: 'lightblue',
//     width: wp(40),
//     // padding: 10, 
//     alignItems: 'center', 
//     borderRadius: 10,
//   },

//   windIcon: {
//     width: wp(15),
//     height: wp(8),
//     resizeMode: "contain",
//     tintColor: "white", 
//   },

//   // Pressure icon style
//   pressureIcon: {
//     width: wp(15),
//     height: wp(8),
//     resizeMode: "contain",
//     tintColor: "white", 
//   },

//   // Humidity icon style 
//   humidityIcon: {
//     width: wp(15),
//     height: wp(8),
//     resizeMode: "contain",
//   },

//   // Visibility icon style
//   visibilityIcon: {
//     width: wp(15),
//     height: wp(8),
//     resizeMode: "contain",
//     tintColor: "white", 
//   },
 
//   value: {
//     fontSize: wp(4),
//     color: "black", 
//   },
// });

// export default styles;

 


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sunriseSunset: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default styles;
