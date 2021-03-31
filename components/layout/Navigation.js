import React, {useContext} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {FirebaseContext} from '../../firebase';
const Nav = styled.nav`
  padding-left: 2rem;
  a{
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gris2);
    font-family: "PT Sans", sans-serif;

    &::last-of-type{
      margin: 0;
    }
  }
`;
const Navigation = () => {
  const {user, firebase} = useContext(FirebaseContext)
  return (  
    <Nav>
      <Link href="/">Incicio</Link>
      <Link href="/">Pupulares</Link>
      {user && (
        <Link href="/">Nuevo Producto</Link>
      )}
    </Nav>
  );
}
 
export default Navigation;