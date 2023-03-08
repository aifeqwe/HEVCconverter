import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const FilePicker = ({ onSelectFile }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(result);
      onSelectFile(result.uri);
    } catch (error) {
      console.log('Error picking file:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={pickFile}>
      <Text style={styles.text}>
        {selectedFile ? selectedFile.name : 'Choose video file'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 32,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default FilePicker;