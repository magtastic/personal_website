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
  margin-top: 5%;
`;

export default () => (
  <Container>
    <TopBar />
    <Body />
  </Container>
);
