
import React, { useCallback, useState } from 'react';
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
//Spinner
import Spinner from 'react-native-loading-spinner-overlay';
//axios api
import Axios, {setClientToken} from '../services/api';


export default function LoginScreen({navigation}) {

    const onSuccess = ({data}) => {
      setClientToken(data.token);
      console.log("logado!")
    };

    const onFailure = error => {
      console.log(error && error.response);
    };

  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <LoginSvg/>
      </View>
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ username: "", password: ""}}
            onSubmit={values => {
              Axios.post('authenticate', {username: values.username, password: values.password})
              .then(onSuccess)
              .catch(onFailure);
            }}
             >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
              <>
                <View style={{backgroundColor: '#FAFAFA' }}>
                    <View style={styles.textIcon}>
                        <Text style={styles.title1}>username</Text>
                        <Ionicons name='globe-outline' size={25} color="#383838"></Ionicons>
                    </View>
                    <TextInput
                    placeholder="Insira seu username ou Cartão SUS"
                    style={styles.textInput}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    keyboardType="number-pad"
                    />
                    {(errors.username && touched.username) &&
                          <Text style={{ fontSize: 14, color: 'red', alignSelf: 'center' }}>{errors.username}</Text>
                        }
                    <View style={styles.textIcon}>
                        <Text style={styles.title1}>password</Text>
                        <Ionicons name='lock-closed' size={25} color="#383838"></Ionicons>
                    </View>
                    <TextInput
                    placeholder="Insira sua password"
                    style={styles.textInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                    />
                    {(errors.password && touched.password) &&
                          <Text style={{ fontSize: 14, color: 'red', alignSelf: 'center'}}>{errors.password}</Text>
                        }
                  <ComponentButton title="Acessar" onPress={handleSubmit} disabled={!isValid}></ComponentButton>
                </View>
              </>
            )}
          </Formik>
            <LoginBottomSvg height="37%" width="100%"/>
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
    height: '43%',
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

export default LoginScreen;