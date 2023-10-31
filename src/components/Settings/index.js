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


// import React, { useState, useEffect } from "react";
// import { View, Text, Switch, StyleSheet, ImageBackground } from "react-native";
// import Dropdown from "../Dropdown";
// import Settingsstyles from "./style";
// import { Picker } from "@react-native-picker/picker";
// import images from "../../images";
// import { useDispatch, useSelector } from 'react-redux';
// import { setTemperatureUnit } from "../../redux/Actions";
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// const Settings = () => {
//   const [autoRefreshTime, setAutoRefreshTime] = useState("never");
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);
//   const dispatch = useDispatch();

//   // Get the selected temperature unit from Redux store
//   const selectedUnit = useSelector((state) => state.temperatureUnit?.unit);
// console.log('selecteddd unit', selectedUnit);
//   // Initialize the temperature unit based on the selected unit from Redux
//   const isCelsiusInitial = selectedUnit === '°C';

//   // Use a local state variable to track the current unit and set it based on Redux
//   const [isCelsius, setIsCelsius] = useState(isCelsiusInitial);
//   console.log('is Celcius', isCelsius);

//   // const toggleTemperatureUnit = async (unit) => {
//   //   setIsCelsius(unit === '°C');
  
//   //   try {
//   //     // Update the AsyncStorage value with the selected unit
//   //     await AsyncStorage.setItem('temperatureUnit', unit);
//   //     dispatch(setTemperatureUnit(unit)); // Dispatch the action with the selected unit
//   //   } catch (error) {
//   //     console.error('Error storing temperature unit in local storage:', error);
//   //   }
//   // };
  

//   const toggleTemperatureUnit = (unit) => {
//     setIsCelsius(unit === '°C');
//     dispatch(setTemperatureUnit(unit));
//     console.log('Action dispatched with unit:', unit);
//   };
  
//   const handleAutoRefreshTimeChange = (value) => {
//     setAutoRefreshTime(value);
//   };

//   const toggleNotifications = () => {
//     setNotificationsEnabled(!notificationsEnabled);
//   };

//   // Fetch the selected temperature unit from local storage when the component mounts
//   useEffect(() => {
//     // Fetch the selected temperature unit from Redux when the component mounts
//     const fetchTemperatureUnit = async () => {
//       try {
//         const storedUnit = await AsyncStorage.getItem('temperatureUnit');
//         if (storedUnit) {
//           // Update the local state variable based on the value from AsyncStorage
//           setIsCelsius(storedUnit === '°C');
//         }
//       } catch (error) {
//         console.error('Error fetching temperature unit from local storage:', error);
//       }
//     };

//     fetchTemperatureUnit();
//   }, []);

//    return (
//     <ImageBackground source={images.backgroundd} style={{ flex: 1 }}>
//       <View style={Settingsstyles.container}>
//         <Text style={Settingsstyles.header}>Settings</Text>

//         <Dropdown
//           options={['°C', '°F']}
//           selectedOption={isCelsius ? '°C' : '°F'}
//           onSelect={(unit) => toggleTemperatureUnit(unit)}
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




import React, { useState, useEffect } from "react";
import { View, Text, Switch, StyleSheet, ImageBackground } from "react-native";
import Dropdown from "../Dropdown";
import Settingsstyles from "./style";
import { Picker } from "@react-native-picker/picker";
import images from "../../images";
import { useDispatch, useSelector } from 'react-redux';
import { setTemperatureUnit } from "../../redux/Actions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';

const Settings = () => {
  const [autoRefreshTime, setAutoRefreshTime] = useState("never");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const dispatch = useDispatch();

  // Get the selected temperature unit from Redux store with a default value
  const selectedUnit = useSelector((state) => state.temperatureUnit?.unit) || '°C';

  const [isCelsius, setIsCelsius] = useState(selectedUnit === '°C');

  // const toggleTemperatureUnit = (unit) => {
  //   // Dispatch the action to update the temperature unit in Redux store
  //   dispatch(setTemperatureUnit(unit));
  //   AsyncStorage.setItem('temperatureUnit', unit).catch((error) => {
  //     console.error('Error storing temperature unit in local storage:', error);
  //   });
  // };
  
// const toggleTemperatureUnit = (unit) => {
//   console.log('Selected unit:', unit); // Add this line
//   dispatch(setTemperatureUnit(unit));
//   AsyncStorage.setItem('temperatureUnit', unit).catch((error) => {
//     console.error('Error storing temperature unit in local storage:', error);
//   });
// };

const toggleTemperatureUnit = (temperatureUnit) => {
      setIsCelsius(temperatureUnit === '°C');
      dispatch(setTemperatureUnit(temperatureUnit));
      console.log('Action dispatched with unit:', temperatureUnit);
    };
  

  useEffect(() => {
    const fetchTemperatureUnit = async () => {
      try {
        const storedUnit = await AsyncStorage.getItem('temperatureUnit');
        if (storedUnit) {
          setIsCelsius(storedUnit === '°C');
        }
      } catch (error) {
        console.error('Error fetching temperature unit from local storage:', error);
      }
    };

    fetchTemperatureUnit();
  }, []);

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

        {/* <Dropdown
          options={['°C', '°F']}
          selectedOption={isCelsius ? '°C' : '°F'}
          onSelect={(unit) => toggleTemperatureUnit(unit)}
          style={Settingsstyles.unitDropdown}
        /> */}
        
      <View style={Settingsstyles.autoRefreshContainer}>
          <Text style={Settingsstyles.autoRefreshLabel}>
            Auto-Refresh Interval:
          </Text>
          <Picker
            selectedValue={autoRefreshTime}
            onValueChange={handleAutoRefreshTimeChange}
            style={{ color: "white" }}
            itemStyle={{
              backgroundColor: "black",
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setTemperatureUnit: (unit) => dispatch(setTemperatureUnit(unit))
//   };
// };

// export default connect(null, mapDispatchToProps)(Settings);

export default Settings;