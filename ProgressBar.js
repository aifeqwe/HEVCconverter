import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.innerBar, { width: `${progress}%` }]} />
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  innerBar: {
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  progressText: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
  },
});

export default ProgressBar;
