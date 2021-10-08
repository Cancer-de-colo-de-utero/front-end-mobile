import * as React from 'react';
import { StyleSheet, Button, FlatList,  ImageBackground, Image } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import { Text, View } from '../components/Themed';
import MensagemSvg from '../assets/svg/mensagem.svg';
import LottieView from 'lottie-react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';

const DATA2 = [
  {
    id: '1',
    title: 'Resultado do exame',
    location: 'Goias, Brasil',
    body: 'O resultado do seu exame citopatológico (prevenção) está pronto. Procure sua Unidade de Saúde:',
    us: 'Nome da unidade de saúde',
    date: 'data',
    poster:
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '2',
    title: 'Resultado do exame',
    location: 'Goias, Brasil',
    body: 'O resultado do seu exame citopatológico (prevenção) está pronto. Procure sua Unidade de Saúde:',
    us: 'Nome da unidade de saúde',
    date: 'data',
    poster:
      'https://images.unsplash.com/photo-1453847668862-487637052f8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80',
  }
];

export default function MensagemScreen({navigation}) {

  const Item = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('MsgDetails', {itemData: item})}>
      <View style={styles.card}>
        <View style={styles.icon}>
          <Image source={{uri: item.poster}} style={styles.icon} resizeMode='cover'></Image>
        </View>
        <Text style={styles.title2}>{item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <View style={styles.container}>
          <FlatList
            data={DATA2}
            renderItem={Item}
            keyExtractor={item => item.id}/>
      </View>
      <View style={styles.svg}>
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
    backgroundColor: '#F0F3F2'
  },
  title1: {
    fontSize: 24,
    paddingVertical: 33,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 18,
    margin: 15
  },
  header: {
    height: '25%',
    width: '100%',
  },
  svg: {
    alignSelf: 'flex-end',
    backgroundColor: '#F0F3F2'
  },
  card: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#FAFAFA',
    width: 300,
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
    width: 95,
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