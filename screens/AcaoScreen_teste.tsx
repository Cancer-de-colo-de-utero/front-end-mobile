import * as React from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Image
} from 'react-native';
const { width } = Dimensions.get('screen');

import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = width
const ITEM_WIDTH = SLIDER_WIDTH * 0.85

type Props = {
  item: {
    id: string
    title: string
    location: string
    data: string
    body: string
    poster: string
  }
}

const DATA = [
  {
    id: '1',
    title: 'O que é câncer do colo do útero?',
    location: 'Goias, Brasil',
    date: 'dd/mm/aa',
    body: 'É um tumor (multiplicação anormal das células) que se desenvolve na parte inferior do útero, chamada “colo”, que fica no fundo da vagina.',
    poster:
      'http://200.137.215.76:8080/static/images/1531108562-huge.jpg',
  },
  {
    id: '2',
    title: 'É possível prevenir o câncer do colo do útero?',
    location: 'Goias, Brasil',
    date: 'dd/mm/aa',
    body: 'Sim! Por meio da vacinação contra o HPV, antes do início da vida sexual, e do exame preventivo ( Exame citopatológico ou Papanicolaou).O uso do preservativo (camisinha) contribui para reduzir a transmissão do HPV. Essa proteção não é total, pois o vírus passa no contato íntimo durante as relações sexuais, mesmo sem penetração e entre pessoas do mesmo sexo.A vacina e o exame preventivo estão disponíveis na unidade básica de saúde próxima de sua casa. Tão importante quanto fazer o exame é buscar o resultado.',
    poster:
      'http://200.137.215.76:8080/static/images/photo-1614308456595-a59d48697ea8.jpg',
  },
  {
    id: '3',
    title: 'O que é o exame preventivo?',
    location: 'Goias, Brasil',
    date: 'dd/mm/aa',
    body: 'É o exame do colo do útero para identificar possíveis lesões causadas pelo HPV. É colhido material do colo e enviado para análise no laboratório. O exame é simples e rápido. Em alguns casos, pode causar algum incômodo. A vacina protege contra os principais tipos de vírus HPV causadores do câncer do colo do útero, mas não todos. Portanto, mesmo vacinada é necessário fazer o exame preventivo na idade recomendada.',
    poster:
      'http://200.137.215.76:8080/static/images/shutterstock_1684318921.jpg',
  },
  {
    id: '4',
    title: 'Quais as orientações para as mulheres que vão fazer o exame?',
    location: 'Goias, Brasil',
    date: 'dd/mm/aa',
    body: 'Preferencialmente elas não devem estar menstruadas nem terem tido relação sexual ou feito uso de duchas ou lubrificantes vaginais nas 24 horas anteriores do exame.',
    poster:
      'http://200.137.215.76:8080/static/images/shutterstock_1737944381.jpg',
  },
];

function carouselItems({item} : Props){
  return(
    <View key={item.id}>
      <Image source={{uri: item.poster}}/>
    </View>
  )
}


export default function CarouselComponent({navigation}) {
  return (
    <View>
      <Carousel
        data={DATA}
        renderItem={carouselItems}
        sliderwidth={SLIDER_WIDTH}
        itemwidth={ITEM_WIDTH}
        useScroll={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F0F3F2',
  },
  title: {
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
  location: {
    fontSize: 16,
    color: '#FFFFFF',
    position: 'absolute'
  },
  date: {
    fontSize: 12,
    marginRight: 25,
    color: '#FFFFFF',
    position: 'absolute'
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
  },
});