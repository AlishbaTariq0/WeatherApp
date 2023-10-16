import { StyleSheet } from 'react-native';
import {
      widthPercentageToDP as wp,
      heightPercentageToDP as hp} from 'react-native-responsive-screen';

const weeklyWeatherStyles  = StyleSheet.create({
  container: {
    flex: wp(1),
    flexDirection: 'column',
    height: wp(56),
    marginBottom: wp(3)
    // justifyContent: 'center',
    // paddingHorizontal: 10,

    // alignItems: 'center',
    // backgroundColor: 'white',
    },

  dayHeader: {
    fontSize: wp(5),
    marginLeft: wp(2),
    color: 'white'
  },

  scrollViewContent: {
    paddingBottom: wp(3),
  },

row: {
  flexDirection: 'row',
  // alignItems: 'center', 
},

  dayContainer: {
    borderWidth: wp(0.5),
    borderColor: 'lightblue',
    padding: wp(2),
    marginBottom: wp(3),
    borderRadius: wp(15),
    width: wp(98),
    height: wp(15),
    marginLeft: wp(1),
    marginTop: wp(1),
    marginRight: wp(1),
    color: 'white'
  },

  weekcontainer: {
    // marginTop: wp(10),
    backgroundColor: 'white'
  },

  imageContainer: {
    marginLeft: wp(1),
    marginRight: wp(50),
    marginBottom: wp(20),
    // flex: wp(0.8),
    alignItems: 'center',

    // flexDirection: 'column',
    marginHorizontal: wp(50)
  },

  // imageContainer: {
  //   marginRight: wp(10) 
  // },

  clearImage: {
    width: wp(10),
    height: wp(10),  
    marginLeft: wp(30),
    marginBottom: wp(5)
  },

  cloudImage: {
    width: wp(10),
    height: wp(10),  
    marginLeft: wp(30),
    marginBottom: wp(40),
    marginEnd: wp(50)
  },

  rainImage: {
    width: wp(10),
    height: wp(10),  
  },

  dayText: {
    fontSize: wp(5.8),
    fontWeight: 'bold',
    marginLeft: wp(2),
    color: 'white'
  },

  temperatureText: {
    fontSize: wp(6),
    marginLeft: wp(2),
    color: 'white'
  },

  descriptionText: {
    fontSize: wp(6),
    color: 'white'
  },
  
  weatherImage: {
    width: wp(10), 
    height: wp(10), 
    marginLeft: wp(1), 
    margin: wp(2),
    marginBottom: wp(50),
    marginVertical: wp(-5),
    marginHorizontal: wp(-2)
  },
    
  flatListContainer: {
    flex: wp(0.5), 
    marginTop: wp(5),
    color: 'white'
  },

  weeklyWeatherContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default weeklyWeatherStyles;