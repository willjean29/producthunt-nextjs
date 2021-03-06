import React from 'react';
import Head from 'next/head';
import Header from './Header';
const Layout = (props) => {
  return (  
    <>
    <Head>
      <html lang="es"/>
      <title>Product Hunt Firebase y Next</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="/>
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"/>
    </Head>
      <Header/>
      <main>
        {props.children}
      </main>
    </>
  );
}
 
export default Layout;