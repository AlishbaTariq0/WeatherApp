// Dropdown.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './style';

const Dropdown = ({ options, selectedOption, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    toggleDropdown();
  };

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
