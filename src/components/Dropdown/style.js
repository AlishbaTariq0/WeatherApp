import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  optionText: {
    fontSize: wp(6), 

  },

  selectedOptionText: {
    fontSize: wp(7), 
  },

  checkmark: {
    fontSize: wp(6), 
    color: "black", 
  },

  header: {
    padding: wp(2),
    borderTopWidth: wp(0.5),
    borderColor: "lightblue",
    color: "white",
  },

  selectedOption: {
    fontSize: wp(6),
    color: "white",
  },

  label: {
    fontSize: wp(6.5),
    color: "white",
  },

  dropdown: {
    flex: wp(1),
    backgroundColor: "white",
    position: "absolute", 
    zIndex: 2, 
    marginTop: wp(10), 
    borderWidth: wp(0.5),
    borderColor: "black",
    borderRadius: wp(2),
    overflowY: "scroll",
    width: wp(98),
  },

  option: {
    padding: wp(2.5),
    borderBottomWidth: wp(0.2),
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
