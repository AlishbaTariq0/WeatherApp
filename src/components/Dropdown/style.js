import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    optionText: {
        fontSize: wp(6), // Font size for options
      },
      selectedOptionText: {
        fontSize: wp(7), // Font size for the selected option
      },

      checkmark: {
        fontSize: wp(6), // Font size for the checkmark
        color: 'blue', // Color for the checkmark
      },

    header: {
      padding: wp(2),
      borderTopWidth: wp(0.5),
      borderColor: 'lightblue',
      color: 'white'
    },



    selectedOption: {
      fontSize:wp(6),
      color: 'white'
    },

    label: {
    fontSize: wp(6.5),
    color: 'white'
    },

    dropdown: {
      flex: wp(1),
      backgroundColor: 'lightblue',
      // marginTop: wp(30),
        marginTop: wp(0.5),
        borderWidth: wp(0.5),
        borderColor: 'black',
        borderRadius: wp(2),
        maxHeight: hp(11.9), // Maximum height of the dropdown
        overflowY: 'scroll',
      },
   

    option: {
      padding: wp(2.5),
      borderBottomWidth: wp(0.2),
      borderColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
        

  });
  
export default styles;




