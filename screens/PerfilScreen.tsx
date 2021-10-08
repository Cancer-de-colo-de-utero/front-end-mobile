import * as React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
//svg
import PerfilSvg from '../assets/svg/perfil.svg';
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
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ nome: "",cpf: "", senha: ""}}
            onSubmit={values => {
              console.log(values);
            }}
             >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
              <>
                <View style={{marginTop: '10%' }}>
                <View style={styles.textIcon}>
                        <Text style={styles.title1}>Nome</Text>
                    </View>
                    <View style={{backgroundColor: '#F0F3F2' }}>
                      <TextInput
                        placeholder="Insira seu Nome"
                        style={styles.textInput}
                        onChangeText={handleChange('nome')}
                        onBlur={handleBlur('nome')}
                        value={values.nome}
                        keyboardType='ascii-capable'
                      />
                    </View>
                    <View style={styles.textIcon}>
                        <Text style={styles.title1}>CPF</Text>
                    </View>
                    <View style={{backgroundColor: '#F0F3F2' }}>
                      <TextInput
                      editable={false}
                      placeholder="111.111.111-11"
                      style={styles.textInput}
                      onChangeText={handleChange('cpf')}
                      onBlur={handleBlur('cpf')}
                      value={values.cpf}
                      keyboardType="number-pad"
                      />
                    </View>
                    <View style={styles.textIcon}>
                        <Text style={styles.title1}>Senha</Text>
                    </View>
                    <View style={{backgroundColor: '#F0F3F2' }}>
                      <TextInput
                      editable={false}
                      placeholder="**************"
                      style={styles.textInput}
                      onChangeText={handleChange('senha')}
                      onBlur={handleBlur('senha')}
                      value={values.senha}
                      secureTextEntry
                      />
                    </View>
                  <View style={{backgroundColor: '#F0F3F2' }}>
                    <ComponentButton title="Salvar" onPress={handleSubmit}></ComponentButton>
                  </View>
                  
                </View>
              </>
            )}
          </Formik>
            <PerfilSvg height="40%" width="100%"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F0F3F2',
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
    backgroundColor: '#FAFAFA'
  },
  textIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F0F3F2' 
},
svg: {
  alignSelf: 'flex-end',
  justifyContent: 'center',
  backgroundColor: '#F0F3F2',
},
});