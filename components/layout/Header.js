import React, {useContext} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {FirebaseContext} from '../../firebase';
import Search from '../ui/Search';
import Navigation from './Navigation';

import Button from '../ui/Button';
const ContainerHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  font-family: "Roboto Slab", serif;
  line-height: 0;
  font-weight: 700;
  margin-right: 2rem;
`;
const Header = () => {
  const {user, firebase} = useContext(FirebaseContext)
  return (  
    <header
      css={css`
        border-bottom: 2px solid var(--gris2);
        padding: 1rem 0;
      `}
    >
      <ContainerHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href="/">
          <Logo>P</Logo>
          </Link>
          
          <Search/>
          <Navigation/>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >

        {
          user ? (
            <>
            <p
            css={css`
              margin-right: 2rem;
            `}
             >Hola : {user.displayName}
            </p>
            <Link href="/">           
              <Button
                bgColor={true}
                onClick= {() => firebase.logout() }
              >
                Cerrar Sesión
              </Button>
            </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button
                  bgColor={true}
                >
                  Login
                </Button>
              </Link>
              <Link href="/crear-cuenta">           
                  <Button
                    bgColor={false}
                  >
                    Crear Cuenta
                  </Button>
              </Link>
            </>
          ) 
        }

        </div>
      </ContainerHeader>
    </header>
  );
}
 
export default Header;