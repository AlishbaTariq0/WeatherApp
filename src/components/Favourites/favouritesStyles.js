import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';

const favouritesStyles = StyleSheet.create({
  container: {
    flex: wp(1),
    backgroundColor: 'white',
    padding: wp(2),
  },

  title: {
    fontSize: wp(7),
    fontWeight: 'bold',
  },

  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: wp(8),
    borderBottomWidth: wp(1),
    borderBottomColor: 'lightgray',
  },

  locationName: {
    fontSize: wp(7),
  },
  removeButton: {
    backgroundColor: 'red',
    paddingHorizontal: wp(8),
    paddingVertical: wp(3),
    borderRadius: wp(1),
  },
  buttonText: {
    color: 'white',
    // width: wp(12),
    // height: wp(0.)
  },

  
 favouritesIcon: {
    width: wp(8),
    height: wp(7),
    marginTop: wp(-9),
    resizeMode: 'contain',
    // backgroundColor: 'blue',
    // marginLeft: wp(),
    tintColor: 'black',
    // marginRight: wp(10),
    marginLeft: wp(-88),
    marginBottom: wp(1.5)
   },

   
});

export default favouritesStyles;
