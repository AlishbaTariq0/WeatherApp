import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        title="Sign Up"
        onPress={() => {
          // Perform sign-up logic here
          // You can navigate to another screen upon successful signup
          navigation.navigate('Home'); // Navigate to the Home screen
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default SignUp;
