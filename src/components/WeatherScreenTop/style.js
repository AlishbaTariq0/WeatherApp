import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    marginTop: wp(1),
    width: wp(100),
    // border: wp(2),
    // borderColor: 'black',
    // borderRadius: wp(1),
    // borderWidth: wp(0.5),
    alignItems: 'center',
  },

  cityName: {
    fontSize: wp(8),

  },

  weatherDescription: {
    fontSize: wp(8)
  },

  temperature: {
    fontSize: wp(13),
    marginLeft: wp(-1.5),
    // color: 'white'
  },

  textContainer: {
    // flex: 1, 
    alignItems: 'center',
    // marginTop: wp(1)

  },

  dateTime: {
    fontSize: wp(5)
  },
  
  imageContainer: {
    // flex: 1, 
     alignItems:'center', 
     marginTop: wp(4)
  },

  weatherImage: {
    width: wp(40), 
    height: wp(50), 
    resizeMode: 'contain',
    // marginRight: wp(8), 
    marginTop: wp(5)
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

});


export default styles; 



  