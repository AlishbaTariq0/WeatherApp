import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { StyleSheet, View, Text, Button } from "react-native";

export default function StackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login!</Text>
      <Button title='Login' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Home = () => {
  return (
    <View>
      <Text>Home!</Text>
    </View>
  );
}
{/*}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 


*/}