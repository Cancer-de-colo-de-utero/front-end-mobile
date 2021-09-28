import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import { Text, View } from '../components/Themed';
import MensagemSvg from '../assets/svg/mensagem.svg';
import LottieView from 'lottie-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import Animated from 'react-native-reanimated';

export default function PerfilScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
      </View>
      <View>
        <Text style={styles.title1}>Mensagens</Text>
      </View>
      <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.icon}>
            </View>
            <Text style={styles.title2}>Exame Pronto!</Text>
          </View>
      </View>
      <View>
        <MensagemSvg/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  title1: {
    fontSize: 24,
    paddingVertical: 33,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 18,
  },
  header: {
    height: '25%',
    width: '100%',
  },
  svg: {
    alignSelf: 'flex-end'
  },
  card: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#F0F3F2',
    width: '70%',
    height: '25%',
    borderWidth: 1,
    borderColor: '#7CC3AA',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.25,
    elevation: 12,
  },
  icon: {
    width: 100,
    height: '100%',
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    borderRadius: 10,
  }
});

function getAllMensagens() {
  throw new Error('Function not implemented.');
}
/*<View style={styles.card}>
            <View style={styles.icon}>
            </View>
            <Text style={styles.title2}>Exame Pronto!</Text>
          </View>
*/