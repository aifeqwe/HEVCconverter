import React from 'react';
import { Modal, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const SuccessModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Icon name="check-circle" size={60} color="#008000" />
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