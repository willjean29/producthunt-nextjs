import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config';

class Firebase {
  constructor(){
    if(!app.apps.length){
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
  }

  async registrar (nombre, email, password){
    let nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email,password);
    nuevoUsuario = await nuevoUsuario.user.updateProfile({
      displayName: nombre
    });

    return nuevoUsuario;
  }

  async login (email, password){
    const user = await this.auth.signInWithEmailAndPassword(email,password);
    console.log(user);
    return user;
  }

  async logout () {
    await this.auth.signOut();
  }
}

export const firebase = new Firebase();
