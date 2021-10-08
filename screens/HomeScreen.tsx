import * as React from 'react';
import { StyleSheet, Button, ImageBackground, Image } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import { Text, View } from '../components/Themed';
import HomeSvg from '../assets/svg/home.svg';
import LottieView from 'lottie-react-native';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ComponentButton2 from '../components/button2';
import { useState } from 'react';
import api from '../services/api';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const image = { uri: "../assets/images/Carousel/img1" };
//mock list
const DATA = [
  {
    id: '1',
    title: 'O que é câncer do colo do útero?',
    location: 'Goias, Brasil',
    date: 'dd/mm/aa',
    body: 'É um tumor (multiplicação anormal das células) que se desenvolve na parte inferior do útero, chamada “colo”, que fica no fundo da vagina.',
    poster:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: '2',
    title: 'É possível prevenir o câncer do colo do útero?',
    location: 'Goias, Brasil',
    date: 'dd/mm/aa',
    body: 'Sim! Por meio da vacinação contra o HPV, antes do início da vida sexual, e do exame preventivo ( Exame citopatológico ou Papanicolaou).O uso do preservativo (camisinha) contribui para reduzir a transmissão do HPV. Essa proteção não é total, pois o vírus passa no contato íntimo durante as relações sexuais, mesmo sem penetração e entre pessoas do mesmo sexo.A vacina e o exame preventivo estão disponíveis na unidade básica de saúde próxima de sua casa. Tão importante quanto fazer o exame é buscar o resultado.',
    poster:
      'https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: '3',
    title: 'O que é o exame preventivo?',
    location: 'Goias, Brasil',
    date: 'dd/mm/aa',
    body: 'É o exame do colo do útero para identificar possíveis lesões causadas pelo HPV. É colhido material do colo e enviado para análise no laboratório. O exame é simples e rápido. Em alguns casos, pode causar algum incômodo. A vacina protege contra os principais tipos de vírus HPV causadores do câncer do colo do útero, mas não todos. Portanto, mesmo vacinada é necessário fazer o exame preventivo na idade recomendada.',
    poster:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: '4',
    title: 'Quais as orientações para as mulheres que vão fazer o exame?',
    location: 'Goias, Brasil',
    date: 'dd/mm/aa',
    body: 'Preferencialmente elas não devem estar menstruadas nem terem tido relação sexual ou feito uso de duchas ou lubrificantes vaginais nas 24 horas anteriores do exame.',
    poster:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
];


export default function HomeScreen({navigation, item}) {
  //render item from carrousel
  
  const Item = ({ item, id }) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', {itemData: item})}>
      <View style={styles.card}>
        <Image source={{uri: item.poster}} style={styles.card} resizeMode='cover'>
        </Image>
        <Text style={styles.titlecard}>{item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  const [users, setUsers] = useState([]);

    useEffect(() => {
      getUsersFromAPI()
  }, [])

    function getUsersFromAPI() {
      api.get('/')
          .then(async function (response) {
              setUsers(response.data);
          })
          .catch(function (error) {
              console.log(error)
          })
     }
  if (!users) {
    return null
  }
  return (
    
    <>
    <StatusBar backgroundColor="#F4CBD0"/>
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={{ backgroundColor: '#F0F3F2' }}>
        <Text style={styles.title1}>Últimas Mensagens</Text>
      </View>
      <ComponentButton2 title="Exame Pronto!" onPress={() => navigation.navigate('Mensagens', {itemData: item})}></ComponentButton2>
      <ComponentButton2 title="Exame Pronto!" onPress={() => navigation.navigate('Mensagens', {itemData: item})}></ComponentButton2>
      <View style={{ backgroundColor: '#F0F3F2' }}>
        <Text style={styles.title1}>Prevenção e Promoção em Saúde</Text>
        <View style={styles.carrousel}>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={Item}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
      <View style={styles.svg}>
        <HomeSvg />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F0F3F2',
  },
  title1: {
    fontSize: 24,
    paddingVertical: 33,
    paddingHorizontal: 30,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titlecard: {
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
    color: '#FFFFFF',
    position: 'absolute',
    paddingBottom: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
    textAlign: 'center',
  },
  header: {
    height: '25%',
    width: '100%',
    backgroundColor: '#F0F3F2',
    justifyContent: 'flex-start'
  },
  svg: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#F0F3F2',
  },
  carrousel: {
    paddingLeft: 30,
    backgroundColor: '#F0F3F2'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 225,
    height: 125,
    borderRadius: 10,
    marginHorizontal: 5,
  }
})

