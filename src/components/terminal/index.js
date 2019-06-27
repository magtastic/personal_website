import React from 'react';
import styled from 'styled-components';
import Body from './Body';
import Header from './Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 20px;

  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 95%;
  }
`;

const Terminal = () => (
  <Container>
    <Header />
    <Body />
  </Container>
);

export default Terminal;
