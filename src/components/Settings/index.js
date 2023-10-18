// import React, { useState } from "react";
// import { View, Text, Switch, StyleSheet, ImageBackground } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Dropdown from "../Dropdown";
// import Settingsstyles from "./style";
// import { Picker } from "@react-native-picker/picker"; // Import Picker from the new package
// import images from "../../images";

// const Settings = () => {
//   const navigation = useNavigation();
//   const [isCelsius, setIsCelsius] = useState(true); // Initialize as Celsius
//   const [autoRefreshTime, setAutoRefreshTime] = useState("never"); // Default auto-refresh time
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);

//   const toggleTemperatureUnit = () => {
//     const newUnit = !isCelsius;
//     setIsCelsius(newUnit);
//     navigation.setParams({ selectedUnit: newUnit });

//     // Pass the selected unit to the Weather page
//     navigation.navigate("Weather", { selectedUnit: newUnit });
//   };

//   // Function to handle changes in the auto-refresh time
//   const handleAutoRefreshTimeChange = (value) => {
//     setAutoRefreshTime(value);
//   };

  
//   const handleUnitChange = (unit) => {
//     // Update the selected unit
//     setSelectedUnit(unit);

//     // Pass the selected unit to the Weather screen
//     navigation.navigate('Weather', { cityName, temperature, selectedUnit: unit });
//   };


//   const toggleNotifications = () => {
//     // Toggle the notifications state
//     setNotificationsEnabled(!notificationsEnabled);
//   };

//   return (
//     <ImageBackground source={images.backgroundd} style={{ flex: 1 }}>
//       <View style={Settingsstyles.container}>
//         <Text style={Settingsstyles.header}>Settings</Text>

//         <Dropdown
//           options={["°C", "°F"]}
//           selectedOption={isCelsius ? "°C" : "°F"}
//           onSelect={(option) => handleUnitChange(option === "°C")}
//           style={Settingsstyles.unitDropdown}
//         />

//         <View style={Settingsstyles.autoRefreshContainer}>
//           <Text style={Settingsstyles.autoRefreshLabel}>
//             Auto-Refresh Interval:
//           </Text>
//           <Picker
//             selectedValue={autoRefreshTime}
//             onValueChange={handleAutoRefreshTimeChange}
//             style={{ color: "white" }} // Set the color style to white for the selected value
//             itemStyle={{
//               backgroundColor: "black", // Background color for the dropdown
//             }}

//             // style={{ color: 'white' }} // Set the color style for the selected value
//             // itemStyle={{ backgroundColor: 'black', color: 'white' }} // Set itemStyle for the dropdown
//             // mode="dropdown" // Set mode to "dropdown" to show the arrow icon
//           >
//             <Picker.Item
//               label="Never"
//               value="never"
//               style={Settingsstyles.pickerItem}
//             />
//             <Picker.Item
//               label="Every Hour"
//               value="1"
//               style={Settingsstyles.pickerItem}
//             />
//             <Picker.Item
//               label="Every 3 Hours"
//               value="3"
//               style={Settingsstyles.pickerItem}
//             />
//             <Picker.Item
//               label="Every 6 Hours"
//               value="6"
//               style={Settingsstyles.pickerItem}
//             />
//             <Picker.Item
//               label="Every 12 Hours"
//               value="12"
//               style={Settingsstyles.pickerItem}
//             />
//             <Picker.Item
//               label="Every 24 Hours"
//               value="24"
//               style={Settingsstyles.pickerItem}
//             />
//           </Picker>
//           <View style={Settingsstyles.NotificationContainer}>
//             <Text style={Settingsstyles.label}>Notifications</Text>
//             <Switch
//               value={notificationsEnabled}
//               onValueChange={toggleNotifications}
//               style={Settingsstyles.switch}
//             />
//           </View>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// export default Settings;

import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Dropdown from "../Dropdown";
import Settingsstyles from "./style";
import { Picker } from "@react-native-picker/picker";
import images from "../../images";
import { useDispatch, useSelector } from 'react-redux';
import { setTemperatureUnit } from "../../redux/Actions";

const Settings = () => {
  const navigation = useNavigation();
  const [autoRefreshTime, setAutoRefreshTime] = useState("never");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const dispatch = useDispatch();

  // Get the selected temperature unit from Redux store
  const selectedUnit = useSelector((state) => state.temperatureUnit?.unit);

  // State variable to toggle between °C and °F
  const [isCelsius, setIsCelsius] = useState(selectedUnit === '°C'); // Initialize based on Redux state

  // Function to handle temperature unit change
  const toggleTemperatureUnit = () => {
    // Toggle the temperature unit between °C and °F
    setIsCelsius(!isCelsius);
    
    // Convert the user's choice into the unit (°C or °F)
    const newUnit = isCelsius ? '°F' : '°C';

    // Dispatch the action with the new unit
    dispatch(setTemperatureUnit(newUnit));
  };
 
  
  

  const handleAutoRefreshTimeChange = (value) => {
    setAutoRefreshTime(value);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <ImageBackground source={images.backgroundd} style={{ flex: 1 }}>
      <View style={Settingsstyles.container}>
        <Text style={Settingsstyles.header}>Settings</Text>

        <Dropdown
          options={["°C", "°F"]}
          selectedOption={isCelsius ? "°C" : "°F"}
          onSelect={() => toggleTemperatureUnit()}
          style={Settingsstyles.unitDropdown}
    
        />

        <View style={Settingsstyles.autoRefreshContainer}>
          <Text style={Settingsstyles.autoRefreshLabel}>
            Auto-Refresh Interval:
          </Text>
          <Picker
            selectedValue={autoRefreshTime}
            onValueChange={handleAutoRefreshTimeChange}
            style={{ color: "white" }} // Set the color style to white for the selected value
            itemStyle={{
              backgroundColor: "black", // Background color for the dropdown
            }}
          >
            <Picker.Item
              label="Never"
              value="never"
              style={Settingsstyles.pickerItem}
            />
            <Picker.Item
              label="Every Hour"
              value="1"
              style={Settingsstyles.pickerItem}
            />
            <Picker.Item
              label="Every 3 Hours"
              value="3"
              style={Settingsstyles.pickerItem}
            />
            <Picker.Item
              label="Every 6 Hours"
              value="6"
              style={Settingsstyles.pickerItem}
            />
            <Picker.Item
              label="Every 12 Hours"
              value="12"
              style={Settingsstyles.pickerItem}
            />
            <Picker.Item
              label="Every 24 Hours"
              value="24"
              style={Settingsstyles.pickerItem}
            />
          </Picker>
          <View style={Settingsstyles.NotificationContainer}>
            <Text style={Settingsstyles.label}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
              style={Settingsstyles.switch}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Settings;




