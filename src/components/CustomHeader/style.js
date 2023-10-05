import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(4),
      marginTop: wp(3)
    },

  settingsIcon: {
    width: wp(6), 
    height: wp(6),
    marginLeft: wp(80), 
    tintColor: 'white',
    marginTop: wp(2)
  },
  favouritesIcon: {
    width: wp(6), 
    height: wp(6),
    tintColor: 'white',
    marginTop: wp(2)
  },
});

  export default styles;