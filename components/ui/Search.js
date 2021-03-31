import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react'
const InputText = styled.input`
  border: 1px solid var(--gris);
  padding: 1rem;
  min-width: 300px;
  border-radius: 5px;
`;
const InputSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-image: url('/static/img/buscar.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 4px;
  right: 1px;
  border: none;
  background-color: white;

  &:hover{
    cursor: pointer;
  }
  &:active, &:focus{
    border: none;
    outline: none;
  }

`;
const Search = () => {
  return (  
    <form action=""
      css={css`
        position: relative;
      `}
    >
      <InputText type="text" placeholder="Buscar Productos"/>
      <InputSubmit type="submit"></InputSubmit>
    </form>
  );
}
 
export default Search;