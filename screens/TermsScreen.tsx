import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ComponentButton3 from '../components/button3';
import 'react-native-gesture-handler';
// svg element
import Logo from '../assets/svg/logo.svg';
import { ScrollView } from 'react-native-gesture-handler';
import ComponentButton2 from '../components/button2';


export default function TermsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.scrollView}>
              <Text style={styles.title}>Olá, seja muito bem-vinda!</Text>
              <ScrollView style={{alignContent: 'center'}}>
                <Text style={{fontSize: 24, textAlign: 'center'}}> Termos de uso</Text>
                <Text style={styles.text}>
                lorem ipsum dolor sit amet consectetur adipiscing elit egestas tortor vulputate nec nisl {"\n"}
                mattis a vestibulum facilisi dis nostra cras praesent justo congue euismod primis torquent mollis {"\n"}
                felis erat nam sociosqu metus cubilia fringilla orci dictum purus fames dapibus potenti finibus {"\n"}
                donec hac eu maecenas consequat blandit aenean viverra diam fusce montes aliquam pellentesque dui {"\n"}
                aptent pulvinar neque odio netus inceptos class maximus nulla ut arcu quis efficitur varius semper
                lorem ipsum dolor sit amet consectetur adipiscing elit egestas tortor vulputate nec nisl {"\n"}
                mattis a vestibulum facilisi dis nostra cras praesent justo congue euismod primis torquent mollis {"\n"}
                felis erat nam sociosqu metus cubilia fringilla orci dictum purus fames dapibus potenti finibus {"\n"}
                donec hac eu maecenas consequat blandit aenean viverra diam fusce montes aliquam pellentesque dui {"\n"}
                aptent pulvinar neque odio netus inceptos class maximus nulla ut arcu quis efficitur varius semper
                lorem ipsum dolor sit amet consectetur adipiscing elit egestas tortor vulputate nec nisl {"\n"}
                mattis a vestibulum facilisi dis nostra cras praesent justo congue euismod primis torquent mollis {"\n"}
                felis erat nam sociosqu metus cubilia fringilla orci dictum purus fames dapibus potenti finibus {"\n"}
                donec hac eu maecenas consequat blandit aenean viverra diam fusce montes aliquam pellentesque dui {"\n"}
                aptent pulvinar neque odio netus inceptos class maximus nulla ut arcu quis efficitur varius semper
                lorem ipsum dolor sit amet consectetur adipiscing elit egestas tortor vulputate nec nisl {"\n"}
                mattis a vestibulum facilisi dis nostra cras praesent justo congue euismod primis torquent mollis {"\n"}
                felis erat nam sociosqu metus cubilia fringilla orci dictum purus fames dapibus potenti finibus {"\n"}
                donec hac eu maecenas consequat blandit aenean viverra diam fusce montes aliquam pellentesque dui {"\n"}
                aptent pulvinar neque odio netus inceptos class maximus nulla ut arcu quis efficitur varius semper
                lorem ipsum dolor sit amet consectetur adipiscing elit egestas tortor vulputate nec nisl {"\n"}
                mattis a vestibulum facilisi dis nostra cras praesent justo congue euismod primis torquent mollis {"\n"}
                felis erat nam sociosqu metus cubilia fringilla orci dictum purus fames dapibus potenti finibus {"\n"}
                donec hac eu maecenas consequat blandit aenean viverra diam fusce montes aliquam pellentesque dui {"\n"}
                aptent pulvinar neque odio netus inceptos class maximus nulla ut arcu quis efficitur varius semper
                lorem ipsum dolor sit amet consectetur adipiscing elit egestas tortor vulputate nec nisl {"\n"}
                mattis a vestibulum facilisi dis nostra cras praesent justo congue euismod primis torquent mollis {"\n"}
                felis erat nam sociosqu metus cubilia fringilla orci dictum purus fames dapibus potenti finibus {"\n"}
                donec hac eu maecenas consequat blandit aenean viverra diam fusce montes aliquam pellentesque dui {"\n"}
                aptent pulvinar neque odio netus inceptos class maximus nulla ut arcu quis efficitur varius semper
                </Text>
              </ScrollView>
            </View>
            <View style={styles.logo}>
              <ComponentButton3 title="Aceito" onPress={() => navigation.navigate('LoginScreen')}></ComponentButton3>
              <Text>Ao continuar você concorda com os termos</Text>
            </View>
        </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F4CBD0'
    },
    logo: {
      width: '70%',
      height: '20%',
      margin: '10%',
      textAlign: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 'bold',
      marginVertical: 100,
      textAlign: 'center',
    },
    text: {
      marginHorizontal: '5%',
      textAlign: 'justify',
    },
    scrollView: {
      width: '90%',
      height: '80%',
    }
  })
  