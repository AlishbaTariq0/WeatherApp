import { StyleSheet } from 'react-native';
import {
      widthPercentageToDP as wp,
      heightPercentageToDP as hp} from 'react-native-responsive-screen';
  

export default StyleSheet.create({
  container: {
    flex: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: wp(10)
  },

row: {
  flexDirection: 'row',
  alignItems: 'center', 
},

  dayContainer: {
    borderWidth: wp(0.5),
    borderColor: 'lightblue',
    padding: wp(2),
    marginBottom: wp(3), // Decreased from wp(8) to wp(2)
    borderRadius: wp(15),
    width: wp(95),
    height: wp(15),
    marginLeft: wp(1),
    marginTop: wp(1)
  },

  dayText: {
    fontSize: wp(6),
    fontWeight: 'bold',
    marginLeft: wp(2)
  },

  temperatureText: {
    fontSize: wp(6),
    marginLeft: wp(2)
  },

  descriptionText: {
    fontSize: wp(6),
  },
  
  weatherImage: {
    width: wp(10), 
    height: wp(10), 
    marginLeft: wp(28), 
  },

});
  