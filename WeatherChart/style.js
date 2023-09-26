import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: wp(0.9),
    marginTop: wp(10),
    marginLeft: wp(2),
    marginRight: wp(2),
    marginBottom: wp(3),
    borderWidth: wp(0.3),
    borderColor: 'purple',

  },
  chart: {
    // Define styles for the LineChart component
    width: 350,
    height: 200,
    borderRadius: 16,
  },
});

export default styles;
