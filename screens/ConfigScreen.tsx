import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import {bottomSvg} from '../components/bottomSvg';
import ConfigHeader from '../components/Header';
import { Text, View } from '../components/Themed';
import ConfigSvg from '../assets/svg/config.svg';
import LottieView from 'lottie-react-native';
import Tabbar from "./components/tabbar";

export default function ConfigScreen({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#F0F3F2'}}>
        <View style={styles.card}>
          <Text style={styles.title2}>Configuração 1</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title2}>Configuração 2</Text>
        </View>
      </View>
    </View>
    <View style={styles.svg}>
      <ConfigSvg/>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F0F3F2'
  },
  title1: {
    fontSize: 24,
    paddingVertical: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  title2: {
    fontSize: 18,
    paddingVertical: 33,
  },
  header: {
    height: '25%',
    width: '100%',
  },
  svg: {
    justifyContent: 'flex-end',
    backgroundColor: '#F0F3F2'
  },
  card: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F0F3F2',
    width: '45%',
    height: '50%',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.25,
    elevation: 4,
  },
});
