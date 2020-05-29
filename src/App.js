import React from "react";
import "./App.css";
import Container from "./Container";
import styled from 'styled-components';

const AppContainer = styled.div` 
  background-color: white;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

function App() {

  return (
    <AppContainer className='app'>
      <Container />
    </AppContainer>
  );
};

export default App;