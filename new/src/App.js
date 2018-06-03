import React from 'react';
import styled from 'styled-components';
import Terminal from './components/terminal/';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <Container>
    <Terminal />
  </Container>
);

export default App;
