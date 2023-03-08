import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { execute } from 'react-native-ffmpeg';

const ConvertVideo = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState('');
  const { videoUrl } = route.params;

  const convertVideo = async () => {
    setIsLoading(true);
    try {
      const output = '-c:v libx265 -preset ultrafast -crf 22 -c:a copy';
      const path = '/path/to/output.mp4';
      await execute(`-i ${videoUrl} ${output} ${path}`);
      setConvertedUrl(path);
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