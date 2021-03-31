import React, {useState, useEffect, useContext} from 'react';
import {firebase} from '../firebase';

const useAuth = () => {
  const [userAuth, setUserAuth] = useState(null);
  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged(usuario => {
      if(usuario){
        setUserAuth(usuario);
      }else{
        setUserAuth(null);
      }
    })
    return () => unsuscribe();
  }, [])
  return userAuth;
}
 
export default useAuth;