import React, {useState} from 'react';
import { StyleSheet, Animated, Image, Platform, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { HeaderImageScrollView,  TriggeringView } from 'react-native-image-header-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

export default function DetailScreen({ route, navigation }) {

  const [scrolly, setScrolly] = useState(new Animated.Value(0))

  const itemData = route.params.itemData;
  
  const MIN_HEIGHT = Platform.OS === 'ios' ? 100 : 75;
  const MAX_HEIGHT = 350

  return (
    <SafeAreaView>
      <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.title2}>{itemData.title}</Text>
              </View>
                <View style={styles.box}>
                  <Text style={styles.body}>{itemData.body}</Text>
                </View>
      </View>
    </SafeAreaView>
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
    height: 150,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center'
  },  
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#383838',
    flexDirection: 'column',
    textAlign: 'center',
  },
  box: {
    height: 150,
    width: '80%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 30,
    borderRadius: 15,
    padding: 20
  },
  body: {
    fontSize: 16,
    color: '#383838',
    flexDirection: 'column',
    textAlign: 'justify',
  },
  header: {
    height: 200,
    width: '100%',
    alignSelf: 'stretch',
    resizeMode: 'cover',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});

