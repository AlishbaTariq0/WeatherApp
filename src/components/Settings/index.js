import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Dropdown from '../Dropdown'; // Assuming you have the Dropdown component
import styles from './style';
import { Picker } from '@react-native-picker/picker'; // Import Picker from the new package

const Settings = () => {
  const navigation = useNavigation();
  const [isCelsius, setIsCelsius] = useState(true); // Initialize as Celsius
  const [autoRefreshTime, setAutoRefreshTime] = useState('never'); // Default auto-refresh time

  const toggleTemperatureUnit = () => {
    const newUnit = !isCelsius;
    setIsCelsius(newUnit);
    navigation.setParams({ selectedUnit: newUnit }); // Update the selectedUnit using setParams
  };

  // Function to handle changes in the auto-refresh time
  const handleAutoRefreshTimeChange = (value) => {
    setAutoRefreshTime(value);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.header}>Settings</Text>
    
        <Dropdown
          options={['°C', '°F']}
          selectedOption={isCelsius ? '°C' : '°F'}
          onSelect={(option) => setIsCelsius(option === '°C')}
        />
    
        <View style={styles.autoRefreshContainer}>
        <Text style={styles.autoRefreshLabel}>Auto-Refresh Interval:</Text>
          <Picker
            selectedValue={autoRefreshTime}
            onValueChange={handleAutoRefreshTimeChange}
          >
             <Picker.Item label="Never" value="never" style={styles.pickerItem} />
    <Picker.Item label="Every Hour" value="1" style={styles.pickerItem} />
    <Picker.Item label="Every 3 Hours" value="3" style={styles.pickerItem} />
    <Picker.Item label="Every 6 Hours" value="6" style={styles.pickerItem} />
    <Picker.Item label="Every 12 Hours" value="12" style={styles.pickerItem} />
    <Picker.Item label="Every 24 Hours" value="24" style={styles.pickerItem} />
  </Picker>
        </View>
      </View>
    );
};

export default Settings;
