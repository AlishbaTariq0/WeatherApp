import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Button, View, Text , StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export default function bottomTag() {
  return (
        <Tab.Navigator>
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='SignUp' component={SignUp} />
        </Tab.Navigator>
  );
}

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Login!</Text>
            <Button title='Login' onPress={() => navigation.navigate('SignUp')} />
        </View>
    );
};

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>SignUp!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: '#fff',
    },
 });
