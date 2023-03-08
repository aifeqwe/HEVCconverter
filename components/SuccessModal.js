import React from 'react';
import { Modal, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

const SuccessModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <AntDesign name="checkcircleo" size={60} color="#008000" />
          <Text style={styles.modalText}>The video was converted successfully!</Text>
          <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;