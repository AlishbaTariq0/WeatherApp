import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const weatherStyles = StyleSheet.create({
    container: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor:'white'
    },

    title: {
      fontSize: wp(5),
      fontWeight: 'bold',
      marginTop: wp(10),
      marginBottom: wp(5),
      color: 'white'

    },

    hourlyItem: {
        padding: 10,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        width: wp(30),
        borderWidth: wp(0.3),
        height: wp(40),
        backgroundColor: 'lightblue',
        borderBlockColor: 'purple',
        alignItems: 'center',
      },

      dateText: {
        fontSize: wp(4.5),
        fontWeight: 'bold',
      },
    
      tempText: {
        marginTop: wp(2),
        fontSize: wp(4.5),
        marginRight: wp(1)
      },
    
      descriptionText: {
        marginTop: wp(2),
        fontSize: wp(4.5),
      },

      weatherImage: {
        width: wp(11.5),
        height: wp(11.5),
        marginTop: wp(0.1)
      },

      timeText: {
        fontSize: wp(4),
        color: 'black', 
        marginTop: wp(2), 
        marginRight: wp(1)
      },
  });

export default weatherStyles;