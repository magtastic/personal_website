import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const GameSmashHeader = styled.p`
  text-align: center;
  font-size: 30pt;
`;

const GameSmashBody = styled.div`
`;

class GameSmash extends Component {
  render() {
    return (
      <Container>
        <GameSmashHeader>
          GameSmash
        </GameSmashHeader>
        <GameSmashBody>
          Working on the gaming platform, GameSmash!
        </GameSmashBody>
      </Container>
    );
  }
}

export default GameSmash;
