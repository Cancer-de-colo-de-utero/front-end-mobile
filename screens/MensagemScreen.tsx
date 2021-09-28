import * as React from 'react';
import { StyleSheet, Button, FlatList,  ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import { Text, View } from '../components/Themed';
import MensagemSvg from '../assets/svg/mensagem.svg';
import LottieView from 'lottie-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import Animated from 'react-native-reanimated';

const DATA = [
  {
    id: '1',
    title: 'Medida 1',
    location: 'Goias, Brasil',
    date: 'data',
    poster:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: '2',
    title: 'Exame Pronto!',
    body: 'Seu exame citopatológico',
    date: 'data',
    poster:
      'https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
  }
];
const Item = ({ title, poster }) => (
  <View style={styles.card}>
            <View style={styles.icon}/>
            <Text style={styles.title2}>Exame Pronto!</Text>
  </View>
);


export default function MensagemScreen({navigation}) {

  const renderItem = ({ item, poster }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}/>
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
    marginHorizontal: 10
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
    color: '#FAFAFA',
    width: 250,
    height: 90,
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