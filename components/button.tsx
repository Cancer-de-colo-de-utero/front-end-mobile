import * as React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { Text, View } from './Themed';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const ComponentButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);
export default ComponentButton

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#383838',
    width: 300,
    height: 60,
    borderRadius: 10,
  },
  text : {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  }
});