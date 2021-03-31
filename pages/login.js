import React, {useState,useContext} from 'react';
import Router from 'next/router';
import {css} from '@emotion/react';
import useValidation from '../hooks/useValidation';
import validarLogin from '../validation/validarLogin';
import {FirebaseContext} from '../firebase';
import Layout from '../components/layout/Layout';
import {Formulario, Campo, InputSubmit, Error} from '../components/ui/Formulario';
const initialState = {
  email: "",
  password: "" 
}
const Login = () => {
  const {
    values,
    errors,
    submitForm,
    handleChange,
    handleSubmit,
    handleBlur
  } = useValidation(initialState,validarLogin,createUser);
  const {email,password} = values;
  const [error, setError] = useState("");
  const {firebase} = useContext(FirebaseContext);
  async function createUser() {
    if(submitForm){
      console.log("Iniciar Sesión");
      try {
        await firebase.login(email,password);
        Router.replace('/');
      } catch (error) {
        console.log(error)
        setError(error.message);
      }
    }
  }
  return (  
    <Layout>
      <h1
        css={css`
          margin-top: 5rem;
          text-align: center;
        `}
      >
        Iniciar Sesión
      </h1>
      <Formulario
        onSubmit={handleSubmit}
      >
      { errors.nombre && <Error>{errors.nombre}</Error>}
      <Campo>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          name="email"
          placeholder="Tu email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Campo>
      { errors.email && <Error>{errors.email}</Error>}
      <Campo>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          name="password"
          placeholder="Tu password"
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Campo>
      { errors.password && <Error>{errors.password}</Error>}
      { error && <Error>{error}</Error>}
      <InputSubmit type="submit" value="Iniciar Sesion"/>
      </Formulario>
    </Layout>
  );
}
 
export default Login;