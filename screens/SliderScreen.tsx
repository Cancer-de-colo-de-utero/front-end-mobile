import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper'
import ComponentButton3 from '../components/button3';
import 'react-native-gesture-handler';

//svg element
import Letter from '../assets/svg/letter.svg';
import Cards from '../assets/svg/cards.svg';
import Cancer from '../assets/svg/cancer.svg';

export default function SliderScreen({navigation}) {
    return (
        <Swiper 
          dotColor="#FAFAFA"
          activeDotColor="#FAFAFA"
          activeDotStyle={styles.dotStyle}>
            <View style={styles.slide1}>
              <View style={{marginBottom: 30}}>
                <Letter
                  //animation
                /> 
              </View>
              <Text style={styles.text}>Te manteremos</Text>
              <Text style={styles.text}>INFORMADA</Text>
              <Text style={styles.text}>sobre os seus</Text>
              <Text style={styles.text}>EXAMES</Text>
            </View>

            <View style={styles.slide2}>
            <View style={{marginBottom: 30}}>
                <Cards
                  //animation
                /> 
              </View>
              <Text style={styles.text}>Fique por dentro</Text>
              <Text style={styles.text}>das</Text>
              <Text style={styles.text}>MEDIDAS</Text>
              <Text style={styles.text}>DE</Text>
              <Text style={styles.text}>SAÚDE</Text>
            </View>

            <View style={styles.slide3}>
            <View style={{marginBottom: 30}}>
                <Cancer
                  //animation
                /> 
              </View>
              <Text style={styles.text}>Fique mais</Text>
              <Text style={styles.text}>SEGURA contra o</Text>
              <Text style={styles.text}>CCU</Text>

              <View style={styles.separator}>
                <ComponentButton3 title="Acessar" onPress={() =>
                 navigation.navigate('Terms')}></ComponentButton3>
              </View>
            </View>
        </Swiper>
    );
  }
  const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7CC3AA'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B2F0E5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F4CBD0',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      marginVertical: 10
    },
    button:{
        width: '60%',
        height: '20%',
        borderRadius: 20
    },
    separator:{ //temporario
       marginTop: 100
    },
    dotStyle:{
      width: '5%',
      height: 20,
      borderRadius: 10
    }
  })
  