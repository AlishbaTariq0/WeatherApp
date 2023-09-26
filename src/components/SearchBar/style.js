import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1.5,
        borderColor: 'black',
        width: Dimensions.get('screen').width - 80,
        padding: 10,
        width: '90%',
        borderRadius: 80,
        marginTop: 200,
        backgroundColor: '#EEEEEE'
        // alignItems: 'center',
  },
});
export default styles;
