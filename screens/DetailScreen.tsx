import React, {useRef} from 'react';
import { StyleSheet, Animated, Image, Platform, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { Text, View } from '../components/Themed';

export default function DetailScreen({ route, navigation }) {

  const offset = useRef(new Animated.Value(0)).current;

  const itemData = route.params.itemData;
  const image = { uri: itemData.poster };
  
  const MIN_HEIGHT = Platform.OS === 'ios' ? 100 : 75;
  const MAX_HEIGHT = 350

  return (
        <View style={styles.container}>
          <StatusBar hidden />
          <View style={styles.header}>
          <ImageBackground source={image} style={styles.image} resizeMode='cover' />
          </View>
          <View style={styles.box}>
            <Text style={styles.title2}>{itemData.title}</Text>
            <ScrollView style={styles.scroll}>
              <Text style={styles.body}>{itemData.body}</Text>
            </ScrollView>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#383838'
  },
  grediant: {
    height: '100%',
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center'
  },  
  title2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#383838',
    flexDirection: 'column',
    textAlign: 'center',
    marginVertical: 10,
    alignSelf: 'auto',
  },
  box: {
    height: 450,
    width: '85%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 30,
    borderRadius: 15,
    padding: 20,
    borderColor: '#FF9162',
    borderWidth: 1
  },
  scroll: {
    height: 1000,
  },
  body: {
    fontSize: 18,
    color: '#383838',
    flexDirection: 'column',
    textAlign: 'justify',
  },
  header: {
    height: 200,
    width: '100%',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  image: {
    height: 200,
    alignSelf: 'stretch',
    overflow: 'hidden',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});

