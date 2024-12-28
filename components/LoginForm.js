import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginForm = () => {
  
  return (
    <SafeAreaView>
      <Text style={styles.marginStyle}>
        Login Form
      </Text>
      <View>
        <TextInput 
          style={styles.marginStyle}
          placeholder="Enter Email"
        />
        <TextInput
          style={styles.marginStyle}
          secureTextEntry={true}
          placeholder="Enter Password"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  marginStyle: {
    martinTop: 8,
    marginBottom: 8
  },
});

export default LoginForm;