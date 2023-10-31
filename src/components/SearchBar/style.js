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
  },

  dropdownButton: {
    padding: 10,
    marginRight: 10,
    // backgroundColor: 'white',
    marginTop: 20,
    width: 200,
    height: 150,
    position: 'relative', // Set the position to relative
    zIndex: 1, // Increase the zIndex to make it appear over other elements
  },

  modalContainer: {
    flex: 1,
    marginTop: wp(20),
    // marginBottom: wp(128),
    justifyContent: 'flex-start', // Align to the top
    alignItems: 'flex-end', // Align to the right
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  dropdownContainer: {
    backgroundColor: 'white',
    padding: wp(5),
    borderRadius: wp(1.8),
    width: wp(50), // Customize the width as needed
    marginTop: wp(10), // Adjust the top margin as needed to position it below the three dots button
    marginRight: wp(2),
    // height: wp(80)
  },
  dropdownTitle: {
    fontSize: wp(8),
    fontWeight: 'bold',
    marginBottom: wp(2),
  },
  favoriteCityText: {
    fontSize: wp(5),
    marginBottom: wp(1.5),
  },

  cityNameText: {
    fontSize: wp(10),
    fontWeight: 'bold',
    color: 'white',
    marginLeft: wp(1),
    marginBottom: wp(1)
  },

  temperatureText: {
    fontSize: wp(5.5),
    color: 'white',
    marginTop: wp(1),
    marginLeft: wp(1)
  },

  feelsLikeText: {
    fontSize: wp(5.5),
    color: 'white',
    // color: 'black',
    marginTop: wp(1),
    marginLeft: wp(1)
  },

  closeButtonText: {
    fontSize: wp(5),
    color: 'white', // Customize the color as needed
    textAlign: 'center',
    fontWeight: 'bold',
    borderStyle: 'solid',
    backgroundColor: 'red',
    borderRadius: wp(0.5),
    borderWidth: wp(0.1),
    height: wp(7),
    marginTop: wp(2),
    },
    weatherInfoContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      padding: wp(10),
      // alignItems: 'center',
      marginTop: wp(5),
      backgroundColor: 'lightblue',
      borderStyle: 'solid',
      borderColor: 'red',
      borderWidth: wp(0.2),
      marginRight: wp(4),
      marginLeft: wp(4),
      borderRadius: wp(5)
    },
    weatherInfoText: {
      color: 'black',
      fontSize: wp(10),
    },

    toggleUnitButton: {
      backgroundColor: 'blue', // Change the background color as needed
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    toggleUnitButtonText: {
      color: 'white', // Change the text color as needed
    },

    favoriteCitiesWeatherContainer: {
      marginTop: wp(8),
      padding: wp(10),
      backgroundColor: 'white', // or any other background color
      borderRadius: wp(8),
      marginRight: wp(2),
      marginLeft: wp(2),
    },
    
    favoriteCitiesContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: wp(4), // Adjust the spacing
    },
  
    favoriteCityBox: {
      // backgroundColor: 'rgba(255, 255, 255, 0.68)', // Box background color with transparency
      backgroundColor: 'rgba(150, 60, 80, 0.2)', // Black with 40% opacity
      padding: wp(5),
      margin: wp(3), // Adjust the spacing,
      borderRadius: wp(5),
      height: wp(36.5),
      marginTop: wp(8),
      width: wp(97.2),
      marginLeft: wp(1.5),
      borderWidth: wp(0.2), 
      borderColor: 'white', 
    },
  

    removeOptionText: {
      color: "white", 
      fontSize: wp(5),
      fontWeight: 'bold',
    },

    removeButton: {
    },
  

    removeButtonContainer: {
      width: wp(100), // Adjust the desired width for the button container
      height: wp(20), 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "red",
      borderWidth: wp(0.2),
      borderRadius: wp(4),
      overflow: 'visible', // Allow the container to overflow
    },

    swipeout: {
      backgroundColor: "transparent", 
      zIndex: wp(1),
      // width: wp(80)
    },

    swipeoutStyle : {
      backgroundColor: 'transparent',
    },
    
    swipeoutContainerStyle: {
      height:wp(50), // Adjust the height as needed
    },

});

export default styles;
