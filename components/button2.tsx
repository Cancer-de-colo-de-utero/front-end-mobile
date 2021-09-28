import * as React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { Text, View } from './Themed';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const ComponentButton2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);
export default ComponentButton2

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#7CC3AA',
    borderRadius: 10,
    height: 30,
    width: '85%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  text : {
    fontSize: 18,
    color: "#383838",
    alignSelf: "center",
  }
});
