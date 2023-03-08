import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notification = ({ message, type }) => {
  let backgroundColor = '';
  let color = '';
  if (type === 'error') {
    backgroundColor = '#F8D7DA';
    color = '#721C24';
  } else if (type === 'success') {
    backgroundColor = '#D4EDDA';
    color = '#155724';
  }

  return (
    <View style={[styles.notification, { backgroundColor }]}>
      <Text style={[styles.message, { color }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  message: {
    fontWeight: 'bold',
  },
});

export default Notification;
