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
      },

textContainer: {

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
    marginTop: wp(3)
  },
  header: {
    fontSize: wp(8),
    fontWeight: 'bold',
    marginBottom: wp(4),
  },

    optionText: {
      fontSize: 16, // Font size for options
    },
    selectedOptionText: {
      fontSize: 20, // Font size for the selected option
    },
    autoRefreshContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: wp(100),
    },

    autoRefreshLabel: {
      fontSize: wp(6), 
    },

    pickerItem: {
      fontSize: wp(5), 
    },
    
    
});
export default Settingsstyles;