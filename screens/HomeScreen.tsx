import * as React from 'react';
import { StyleSheet, Button, ImageBackground, Image } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import { Text, View } from '../components/Themed';
import HomeSvg from '../assets/svg/home.svg';
import LottieView from 'lottie-react-native';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
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
    id: 1,
    title: 'Medida 1',
    location: 'Goias, Brasil',
    date: 'data',
    poster:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: 2,
    title: 'Medida 2',
    location: 'Goias, Brasi',
    date: 'data',
    poster:
      'https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: 3,
    title: 'Medida 3',
    location: 'Goias, Brasi',
    date: 'data',
    poster:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: 4,
    title: 'Medida 4',
    location: 'Goias, Brasi',
    date: 'data',
    poster:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
];

const Item = ({ title, poster }) => (
  <View style={styles.card}>
    <ImageBackground source={{uri: poster}} style={styles.card} resizeMode='cover'>
      <Text>{title}</Text>
    </ImageBackground>
  </View>
);

export default function HomeScreen({navigation}) {
  //render item from carrousel
  const renderItem = ({ item, poster }) => (
    <Item title={item.title} />
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
      <ComponentButton2 title="Exame Pronto!" onPress={() => navigation.navigate('Mensagens')}></ComponentButton2>
      <ComponentButton2 title="Exame Pronto!" onPress={() => navigation.navigate('Mensagens')}></ComponentButton2>
      <View style={{ backgroundColor: '#F0F3F2' }}>
        <Text style={styles.title1}>Prevenção e Promoção em Saúde</Text>
        <View style={styles.carrousel}>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
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
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 225,
    height: 125,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#F0F3F2'
  }
})

