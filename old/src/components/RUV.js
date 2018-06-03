import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const RUVHeader = styled.p`
  text-align: center;
  font-size: 30pt;
`;

const RUVBody = styled.div`
`;

class RUV extends Component {
  render() {
    return (
      <Container>
        <RUVHeader>
          RÚV
        </RUVHeader>
        <RUVBody>
          I started working for RÚV early 2010, 
          where I was a vision mixer and later 
          moved on to production assistance
          with the news team.
        </RUVBody>
      </Container>
    );
  }
}

export default RUV;
