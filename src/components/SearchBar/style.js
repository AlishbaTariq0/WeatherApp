import { StyleSheet, Dimensions } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: wp(0.3),
        borderColor: 'black',
        width: Dimensions.get('screen').width - 80,
        padding: wp(1),
        width: wp(80),
        height: wp(14),
        borderRadius: wp(8),
        marginTop: wp(5),
        backgroundColor: '#EEEEEE'
       
  },

  title: {
    color: 'white',
    fontSize: 40,
    marginTop: 20,
    marginLeft: 5,
  },
  dropdownButton: {
    padding: 10,
    marginRight: 100,
  },
  
  searchInput: {
    padding: wp(3), 
    borderColor: '#ccc', 
    borderRadius: wp(100),
    fontSize: wp(4.5),
    marginTop: wp(1),
  },
  

searchButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    width: wp(11), 
    height: wp(11),
    marginRight: wp(0.6),
    marginTop: wp(0.3),
    borderRadius: wp(15), // Half of the width/height to create a circle
    alignItems: 'center', // Center the content horizontally and vertically
    justifyContent: 'center',
    cursor: 'pointer',
  },

  searchButtonHover: {
    backgroundColor: '#0056b3'
  }
});


export default styles;
