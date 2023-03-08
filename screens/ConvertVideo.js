import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import Video from 'react-native-video-processing';

const ConvertVideo = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState('');
  const { videoUrl } = route.params;

  const convertVideo = async () => {
    setIsLoading(true);
    try {
      const result = await Video.convert({
        input: videoUrl,
        output: '/path/to/converted/video.mp4',
        quality: '720p',
      });
      setConvertedUrl(result.output);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convert Video</Text>
      <Text style={styles.subtitle}>{videoUrl}</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {convertedUrl ? (
            <Text style={styles.subtitle}>{convertedUrl}</Text>
          ) : (
            <Button title="Convert" onPress={convertVideo} />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default ConvertVideo;