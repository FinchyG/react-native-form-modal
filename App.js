import React, { useState} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
import LoginForm from './components/LoginForm';


const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.appStyle}>
      <Button title="Click here to login" onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}>
        <View>
          <LoginForm />
          <View>
            <Button 
              title="Close Login Form"
              onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appStyle: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;