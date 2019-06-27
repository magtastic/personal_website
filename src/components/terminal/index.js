import React from 'react';
import styled from 'styled-components';
import Body from './body';
import TopBar from './topBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 10%;

  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 95%;
  }
`;

const Terminal = () => (
  <Container>
    <TopBar />
    <Body />
  </Container>
);

export default Terminal;
