import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: wp(10),
  },

  box: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderStyle: 'solid',
    borderRadius: wp(1),
    borderWidth: wp(0.4),
    width: wp(40), 
    height: wp(25),
    marginLeft: wp(5),
    marginRight: wp(5) 

  },

  sunriseImage: {
    width: wp(12),
    height: wp(12),
  },

  sunsetImage: {
    width: wp(12.5),
    height: wp(12), 
  },

  sunsetText: {
    fontSize: wp(5),
    marginBottom: wp(2),
    fontWeight: 'bold'
  },

  sunriseText: {
    fontSize: wp(5),
    marginBottom: wp(2),
    fontWeight: 'bold'
  },

  sunriseTime: {
    fontSize: wp(4.5),
  },

  sunsetTime: {
    fontSize: wp(4.5),
  },

  fadeAnim: {
    opacity: 0, // Initial opacity set to 0
  },
});

export default styles;
