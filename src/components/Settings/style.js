import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Settingsstyles = StyleSheet.create({
    container: {
        flex: 1,
      },
      toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
        color: 'white'
      },

      picker: {
        color: 'white', // Text color of the selected value
      },
        
settingsIcon: {
    height: wp(6),
    width: wp(7),
    marginTop: wp(8),
    resizeMode: 'contain',
    // backgroundColor: 'blue',
    marginLeft: wp(66),
    tintColor: 'black',
    // marginRight: wp(15),
    // marginBottom: wp(1.5)
  },

  iconContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  container: {
    flex: 1,
    padding: wp(1),
    marginTop: wp(3),
  },
  header: {
    fontSize: wp(8),
    fontWeight: 'bold',
    marginBottom: wp(4),
    color: 'white'
  },

    optionText: {
      fontSize: 16, 
      color: 'white'
    },
    selectedOptionText: {
      fontSize: 20,
      color: 'white'
    },
    autoRefreshContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: wp(100),
        color: 'white'
    },

    autoRefreshLabel: {
      fontSize: wp(6), 
      color: 'white'
    },

    pickerItem: {
      fontSize: wp(5),
      color: 'black' 
    },
    
    
});
export default Settingsstyles;