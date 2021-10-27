import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
    cpf: yup
      .string()
      //.matches(/^\d{3}\\d{3}\\d{3}\\d{2}$/)
      .required('Insira seu cpf'),
    senha: yup
      .string()
      //.min(8, ({ min }) => `Senha deve possuir no minimo ${min} caracteres`)
      .required('Insira sua senha!'),
  })
export default loginValidationSchema