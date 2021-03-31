import React, {useState,useContext} from 'react';
import Router from 'next/router';
import {css} from '@emotion/react';
import useValidation from '../hooks/useValidation';
import validarCrearCuenta from '../validation/validarCrearCuenta';
import {FirebaseContext} from '../firebase';
import Layout from '../components/layout/Layout';
import {Formulario, Campo, InputSubmit, Error} from '../components/ui/Formulario';
const initialState = {
  nombre: "",
  email: "",
  password: "" 
}
const CrearCuenta = () => {
  const {
    values,
    errors,
    submitForm,
    handleChange,
    handleSubmit,
    handleBlur
  } = useValidation(initialState,validarCrearCuenta,createUser);
  const {nombre,email,password} = values;
  const [error, setError] = useState("");
  const {firebase} = useContext(FirebaseContext);
   async function createUser() {
    if(submitForm){
      console.log("enviar form");
      try {
        await firebase.registrar(nombre,email,password);
        Router.push('/');
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
        Crear Cuenta
      </h1>
      <Formulario
        onSubmit={handleSubmit}
      >
      <Campo>
        <label htmlFor="nombre">Nombre</label>
        <input 
          type="text" 
          id="nombre"
          name="nombre"
          placeholder="Tu Nombre"
          value={nombre}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Campo>
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
      <InputSubmit type="submit" value="Crear Cuenta"/>
      </Formulario>
    </Layout>
  );
}
 
export default CrearCuenta;