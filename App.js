import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ChooseVideo from './screens/ChooseVideo';
import ConvertVideo from './screens/ConvertVideo';
import ErrorModal from './components/ErrorModal';
import SuccessModal from './components/SuccessModal';
import styles from './components/styles';

const Stack = createStackNavigator();

export default function App() {
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState('');
  const [successModalMessage, setSuccessModalMessage] = useState('');

  const showErrorModal = (message) => {
    setErrorModalMessage(message);
    setErrorModalVisible(true);
  };

  const showSuccessModal = (message) => {
    setSuccessModalMessage(message);
    setSuccessModalVisible(true);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Video Converter' }}
            />
            <Stack.Screen
              name="ChooseVideo"
              component={ChooseVideo}
              options={{ title: 'Choose a video to convert' }}
            />
            <Stack.Screen
              name="ConvertVideo"
              component={ConvertVideo}
              options={{ title: 'Convert video' }}
              initialParams={{ showErrorModal, showSuccessModal }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <ErrorModal
          visible={errorModalVisible}
          message={errorModalMessage}
          onClose={() => setErrorModalVisible(false)}
        />
       <SuccessModal
          visible={successModalVisible}
          message={successModalMessage}
          onClose={() => setSuccessModalVisible(false)}
  />
      </View>
    </>
  );
}