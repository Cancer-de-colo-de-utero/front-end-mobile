import * as React from 'react';
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const { width } = Dimensions.get('screen');
import { EvilIcons } from '@expo/vector-icons';
import {
  FlingGestureHandler,
  Directions,
  State,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler';

import MedidasSvg from '../assets/svg/medidas.svg';
import { height } from '../constants/Layout';

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

const OVERFLOW_HEIGHT = 80;
const SPACING = 10;
const ITEM_WIDTH = width * 0.75;
const ITEM_HEIGHT = ITEM_WIDTH * 1.5;
const VISIBLE_ITEMS = 3;

export default function AcoesScreen({navigation}) {
  const [data, setData] = React.useState(DATA);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const setActiveIndex = React.useCallback((activeIndex) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });

  React.useEffect(() => {
    if (index === data.length - VISIBLE_ITEMS - 1) {
      // get new data
      // fetch more data
      const newData = [...data, ...data];
      setData(newData);
    }
  });

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  return (
    <FlingGestureHandler
      key='left'
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        key='right'
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor="#FF7B42"/>
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            horizontal
            inverted
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: SPACING * 2,
              marginTop: 50,
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [style, { zIndex: data.length - index }];
              return (
                  <View style={newStyle} index={index} {...props}>
                    {children}
                  </View>
              );
            }}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [40, 0, -100],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.4],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });

              return (
                <Animated.View
                  style={{
                    borderRadius:15,
                    position: 'absolute',
                    backgroundColor: "#F0F3F2",
                    left: -ITEM_WIDTH / 2,
                    opacity,
                    transform: [
                      {
                        translateX,
                      },
                      { scale },
                    ],
                  }}
                >
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', {itemData: item})}>
                    <View style={{
                          width: ITEM_WIDTH,
                          height: ITEM_HEIGHT,
                          borderRadius: 15,
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          backgroundColor: "#F0F3F2",
                        }}>
                      <Image
                        resizeMode='cover'
                        source={{ uri: item.poster }}
                        style={{
                          width: ITEM_WIDTH,
                          height: ITEM_HEIGHT,
                          borderRadius: 15
                        }}
                      />
                      <View style={styles.cardContainters}>
                        <Text style={[styles.title]} numberOfLines={2}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </Animated.View>
              );
            }}
          />
          <MedidasSvg width="100%"/>
        </View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}
/*
  <View style={styles.itemContainerRow}>
    <Text style={[styles.location]}>
      <EvilIcons
        name='location'
        size={16}
        color='#FFFFFF'
        style={{ marginRight: 5 }}
      />
      {item.location}
    </Text>
    <Text style={[styles.date]}>{item.date}</Text>
  </View>
*/

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
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 2,
  },
  itemContainerRow: {
    flexDirection: 'row',
    height: height * 0.1,
    width: '100%', 
    position: 'absolute',
    alignSelf: 'auto',
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
  },
  cardContainters: {
    position: 'absolute',
    height: height * 0.1,
    width: '100%',
    backgroundColor: '#000000',
    opacity: 0.6,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15, 
  }
});