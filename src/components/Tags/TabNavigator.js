import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTag from './BottomTag'; // Import your BottomTag component here

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='BottomTag'
        options={{
          tabBarLabel: 'Bottom Tag', // Customize the label as needed
        }}
      >
        {(props) => <BottomTag {...props} />} {/* Pass props to the BottomTag component */}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
