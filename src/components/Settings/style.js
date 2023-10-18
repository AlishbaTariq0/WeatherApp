import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Settingsstyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: wp(1),
      marginTop: wp(5), 
      marginBottom: wp(-16),
      borderBottomWidth: wp(0.2),
      borderColor: 'gray',
      justifyContent: 'space-between',
      },

      toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: wp(1),
        borderBottomWidth: wp(0.2),
        borderColor: 'gray',
        marginBottom: wp(2),
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
        marginBottom: wp(121),
        color: 'white',
        position:'relative',
    },

    autoRefreshLabel: {
      fontSize: wp(6), 
      color: 'white'
    },

    pickerItem: {
      fontSize: wp(5),
      color: 'black' 
    },

    unitDropdownContainer: {
      zIndex: wp(10),
    },
    
    unitDropdown: {
      position: 'absolute',
      zIndex: 10, 
      marginTop: wp(50),
    },
    
    NotificationContainer: {
      flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: wp(1),
        borderBottomWidth: wp(0.2),
        borderColor: 'gray',
        marginBottom: wp(2),
        color: 'white',
        marginTop: wp(5)
      },

    label: {
      fontSize: wp(6),
      color: 'white',
      // marginTop: wp(15)
    },

    switch: {
    },

    lightThemeStyles: {
      container: {
        backgroundColor: "white",
      },
      header: {
        color: "black",
      },
    },

    darkThemeStyles:{ 
      container: {
        backgroundColor: "black",
      },
      header: {
        color: "white",
      },
    },

});
export default Settingsstyles;