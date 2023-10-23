// // Dropdown.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import styles from './style';


// const Dropdown = ({ options, selectedOption, onSelect }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleOptionSelect = (option) => {
//     onSelect(option);
//     toggleDropdown();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
//         <Text style={styles.label}>Unit</Text>
//         <Text style={styles.selectedOption}>{selectedOption}</Text>
//       </TouchableOpacity>

//       {isDropdownOpen && (
//         <View style={styles.dropdown}>
//           {options.map((option) => (
//             <TouchableOpacity
//               key={option}
//               onPress={() => handleOptionSelect(option)}
//               style={styles.option}
//             >
//               <Text style={styles.optionText}>{option}</Text>
//               {selectedOption === option && (
//                 <Text style={styles.checkmark}>&#10003;</Text>
//               )}
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// export default Dropdown;
// Dropdown.js


// Dropdown.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import styles from './style';

// const Dropdown = ({ options, selectedOption, onSelect }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleOptionSelect = async (option) => {
//     // Save the selected unit to AsyncStorage
//     try {
//       await AsyncStorage.setItem('temperatureUnit', option);
//     } catch (error) {
//       console.error('Error saving temperature unit to local storage:', error);
//     }

//     onSelect(option);
//     toggleDropdown();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
//         <Text style={styles.label}>Unit</Text>
//         <Text style={styles.selectedOption}>{selectedOption}</Text>
//       </TouchableOpacity>

//       {isDropdownOpen && (
//         <View style={styles.dropdown}>
//           {options.map((option) => (
//             <TouchableOpacity
//               key={option}
//               onPress={() => handleOptionSelect(option)}
//               style={styles.option}
//             >
//               <Text style={styles.optionText}>{option}</Text>
//               {selectedOption === option && (
//                 <Text style={styles.checkmark}>&#10003;</Text>
//               )}
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// export default Dropdown;




import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'; // Import useDispatch from 'react-redux'
import styles from './style';

import { setTemperatureUnit } from '../../redux/Actions';

const Dropdown = ({ options, selectedOption, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    // Dispatch the action with the selected unit
    dispatch(setTemperatureUnit(option));

    onSelect(option);
    toggleDropdown();
  };
  console.log('selected option', selectedOption)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
        <Text style={styles.label}>Unit</Text>
        <Text style={styles.selectedOption}>{selectedOption}</Text>
      </TouchableOpacity>

      {isDropdownOpen && (
        <View style={styles.dropdown}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleOptionSelect(option)}
              style={styles.option}
            >
              <Text style={styles.optionText}>{option}</Text>
              {selectedOption === option && (
                <Text style={styles.checkmark}>&#10003;</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
