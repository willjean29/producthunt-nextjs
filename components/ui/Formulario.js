import styled from '@emotion/styled';

export const Formulario = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 0 auto;
`;

export const Campo = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  label{
    flex: 0 0 150px;
    font-size: 1.8rem;
  }
  input{
    flex: 1;
    padding: 1rem;
  }
`;

export const InputSubmit = styled.input`
  background-color: var(--naranja);
  padding: 1.5rem;
  border: none;
  color: white;
  width: 100%;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "PT Sans", sans-serif;

  &:hover{
    cursor: pointer;
  }
`;

export const Error = styled.p`
  background-color: red;
  color: #fff;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  text-align: center;
  padding: 1rem;
  font-size: 1.4rem;
  margin: 2rem 0;
`;