import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

import LottieView from 'lottie-react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/images/bdLottie.json')} autoPlay loop/>
      <Button title= 'teste' onPress={() =>
        navigation.navigate('LoginScreen')} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Lottie: {
    width: 100,
    height: 100,
  }
});
