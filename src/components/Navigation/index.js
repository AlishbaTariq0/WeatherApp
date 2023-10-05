// Navigation.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Weather from '../../screens/Weather';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Weather">
      <Stack.Screen
        name="Weather"
        component={Weather}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;




// import React from 'react';
// import ReduxNavigation from './ReduxNavigation'; // Import the AppNavigator from ReduxNavigation

// function Navigation() {
//   return (
//     <ReduxNavigation /> // Use the AppNavigator from ReduxNavigation
//   );
// }

// export default Navigation;
