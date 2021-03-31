import '../styles/globals.css'
import {FirebaseContext,firebase } from '../firebase';
import useAuth from '../hooks/useAuth';

function MyApp({ Component, pageProps }) {
  const user = useAuth();
  console.log(user);
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        user: user
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default MyApp
