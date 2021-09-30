import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, ImageBackground, Button } from 'react-native';
import ConfigHeader from '../components/Header';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ConfigScreen from '../screens/ConfigScreen';
import HomeScreen from '../screens/HomeScreen';
import MensagemScreen from '../screens/MensagemScreen';
import AcaoScreen from '../screens/AcaoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import PerfilScreen from '../screens/PerfilScreen';
import DetailScreen from '../screens/DetailScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Header() {
  return (
    <View style={styles.superHeader}>
      <Text style={styles.title}>Details</Text>
    </View>
  );
}


const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      tabBarOptions={{ activeTintColor: Colors[colorScheme].bar ,
      showLabel: false,
      style:{
        position: 'absolute',
        bottom: 15,
        left: 20,
        right: 20,
        backgroundColor: '#FAFAFA',
        borderRadius: 30,
        height: 60,
        ...styles.shadow
      }}}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Medidas de Saúde"
        component={AcaoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-medkit" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={ConfigNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-settings" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Mensagens"
        component={MensagemNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-chatbubbles" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={PerfilNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    elevation: 4,
  },
  superHeader:{
    backgroundColor: 'transparent',
    margin: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginEnd: '25%'
  },
  header: {
    flex: 1,
    backgroundColor: "#F4CBD0",
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 20,
  },
  headerTitle: {
      fontSize: 26,
      paddingLeft: 10,
      color: Colors.dark.text,
  },
})

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ConfigStack = createStackNavigator();

function ConfigNavigator() {
  return (
    <ConfigStack.Navigator screenOptions={{ headerShown: true }}>
      <ConfigStack.Screen
        name="ConfigScreen"
        component={ConfigScreen}
        options={{ 
          headerTitle: 'Configurações',
          headerStyle: {
           backgroundColor: '#F4CBD0',
           height: 160,
           borderBottomLeftRadius: 50,
           borderBottomRightRadius: 50,
           elevation: 0,
           shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#383838',
            fontSize: 22,
          },
          headerTitleAlign: 'center',
  }}
      />
    </ConfigStack.Navigator>
  );
}

const MensagemStack = createStackNavigator();

function MensagemNavigator() {
  return (
    <MensagemStack.Navigator screenOptions={{ headerShown: true }}>
      <MensagemStack.Screen
        name="Mensagem"
        component={MensagemScreen}
        options={{ 
          headerTitle: 'Mensagens',
          headerStyle: {
           backgroundColor: '#F4CBD0',
           height: 160,
           borderBottomLeftRadius: 50,
           borderBottomRightRadius: 50,
           elevation: 0,
           shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#383838',
            fontSize: 22,
          },
          headerTitleAlign: 'center',
  }}
      />
    </MensagemStack.Navigator>
  );
}

const PerfilStack = createStackNavigator();

function PerfilNavigator() {
  return (
    <PerfilStack.Navigator screenOptions={{ headerShown: true }}>
      <PerfilStack.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ headerTitle: 'Peril' }}
      />
    </PerfilStack.Navigator>
  );
}

const AcaoStack = createStackNavigator();

function AcaoNavigator({navigation}) {
  return (
    <AcaoStack.Navigator screenOptions={{ headerShown: true }}>
      <AcaoStack.Screen
        name="Acoes"
        component={AcaoScreen}
        options={{ 
                  headerTitle: 'Prevenção e promoção em Saúde',
                  headerStyle: {
                   backgroundColor: '#F4CBD0',
                   height: 160,
                   borderBottomLeftRadius: 50,
                   borderBottomRightRadius: 50,
                   elevation: 0,
                   shadowOpacity: 0,
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#383838',
                    fontSize: 22,
                  },
                  headerTitleAlign: 'center',
          }}
      />
      <AcaoStack.Screen
        name="Details"
        component={DetailScreen}
        options={{headerTitle: props => <Header {...props} />,
                      headerLeft: () => (
                        <TouchableOpacity  onPress={() => navigation.goBack() }style={{marginHorizontal: 30, backgroundColor: 'transparent'}}>
                          <View style={{backgroundColor: 'transparent'}}>
                            <Ionicons name='arrow-back' size={25} color="#383838"></Ionicons>
                          </View>
                        </TouchableOpacity>
                      ),
                      headerTransparent: true,
                    }}
      />
    </AcaoStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}
