import * as React from 'react';
import { Button, Dimensions, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from './Themed';
import Colors from '../constants/Colors';

export default function Header() {
  return (
    <View style={styles.header}>
        <SafeAreaView>
          <Text style={styles.headerTitle}>Seja Bem-vinda,</Text>
          <Text style={styles.headerUser}>Amanda</Text>
        </SafeAreaView>
        <View style={styles.profileIcon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#F4CBD0",
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 20,
  },
  headerTitle: {
      fontSize: 26,
      paddingLeft: 10,
      color: Colors.dark.text,
  },
  headerUser: {
    fontSize: 36,
    padding: 10,
    color: Colors.light.text,
    fontWeight: "bold"
   },
   profileIcon: {
    width: 80,
    height: 80,
    alignContent: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 40,
   },
});