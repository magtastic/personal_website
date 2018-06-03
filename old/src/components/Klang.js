import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const KlangHeader = styled.p`
  text-align: center;
  font-size: 30pt;
`;

const KlangBody = styled.div`
`;

class Klang extends Component {
  render() {
    return (
      <Container>
        <KlangHeader>
          Klang
        </KlangHeader>
        <KlangBody>
          Intern one summer working on the mobile game ReRunners.
        </KlangBody>
      </Container>
    );
  }
}

export default Klang;
