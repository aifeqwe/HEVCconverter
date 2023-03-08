import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ChooseVideo = ({ setVideo, setVideoInfo, setIsConverted }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const getVideoInfo = async (uri) => {
    try {
      const { codec, framerate, bitrate, fileSize } =
        await VideoThumbnails.getVideoInfoAsync(uri);
      setVideoInfo({
        codec,
        framerate,
        bitrate,
        fileSize,
      });
    } catch (error) {
      console.log('Error getting video info:', error);
    }
  };

  const pickVideo = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: false,
        quality: 1,
        videoExportPreset: 'passthrough',
      });

      if (!result.cancelled) {
        setVideo(result);
        setIsConverted(false);
        getVideoInfo(result.uri);
      }
    } catch (error) {
      console.log('Error picking video:', error);
      setErrorMessage('Error picking video from gallery');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickVideo}>
        <Text style={styles.text}>Choose Video</Text>
      </TouchableOpacity>
      {errorMessage ? (
        <Text style={styles.error}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 24,
    color: '#0080ff',
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    marginVertical: 10,
  },
});

export default ChooseVideo;