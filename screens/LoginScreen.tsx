import * as React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
//svg
import LoginSvg from '../assets/svg/login.svg';
import LoginBottomSvg from '../assets/svg/loginbottom.svg';
//formik
import { Formik } from 'formik';
//yup
import * as yup from 'yup'
import loginValidationSchema from '../constants/ValidationSchema/loginValidationSchema'
//icons
import { Ionicons } from '@expo/vector-icons';
//components
import ComponentButton from '../components/button';
//axios api
import api from '../services/api';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <LoginSvg/>
      </View>
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ cpf: "", senha: ""}}
            onSubmit={values => {
              console.log(values);
              navigation.navigate("Root")
            }}
             >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
              <>
                <View style={{backgroundColor: '#FAFAFA' }}>
                    <View style={styles.textIcon}>
                        <Text style={styles.title1}>CPF</Text>
                        <Ionicons name='globe-outline' size={25} color="#383838"></Ionicons>
                    </View>
                    <TextInput
                    placeholder="Insira seu CPF ou Cartão SUS"
                    style={styles.textInput}
                    onChangeText={handleChange('cpf')}
                    onBlur={handleBlur('cpf')}
                    value={values.cpf}
                    keyboardType="number-pad"
                    />
                    {(errors.cpf && touched.cpf) &&
                          <Text style={{ fontSize: 14, color: 'red', alignSelf: 'center' }}>{errors.cpf}</Text>
                        }
                    <View style={styles.textIcon}>
                        <Text style={styles.title1}>Senha</Text>
                        <Ionicons name='lock-closed' size={25} color="#383838"></Ionicons>
                    </View>
                    <TextInput
                    placeholder="Insira sua senha"
                    style={styles.textInput}
                    onChangeText={handleChange('senha')}
                    onBlur={handleBlur('senha')}
                    value={values.senha}
                    secureTextEntry
                    />
                    {(errors.senha && touched.senha) &&
                          <Text style={{ fontSize: 14, color: 'red', alignSelf: 'center'}}>{errors.senha}</Text>
                        }
                  <ComponentButton title="Acessar" onPress={handleSubmit} disabled={!isValid}></ComponentButton>
                </View>
              </>
            )}
          </Formik>
            <LoginBottomSvg height="30%" width="100%"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
  title1: {
    fontSize: 24,
    paddingVertical: 10,
    paddingLeft: 40,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    height: '40%',
  },
  textInput: {
    fontSize: 16,
    textAlign: 'left',
    paddingStart: 15,
    height: 45,
    width: '80%',
    alignSelf: 'center',
    borderColor: '#585858',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  textIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FAFAFA' 
},
svg: {
  alignSelf: 'flex-end',
  height: "35%", 
  width:"100%",
  backgroundColor: '#FAFAFA'
}
});