import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const SocialWorkHeader = styled.p`
  text-align: center;
  font-size: 30pt;
`;

const SocialWorkBody = styled.div`
`;

class HI extends Component {
  render() {
    return (
      <Container>
        <SocialWorkHeader>
          Social Life
        </SocialWorkHeader>
        <SocialWorkBody>
          I have been fairly active in the social life in the University of Iceland.
          I was in the student union for Röskva.
          I was a treasurer for Nörd.
          I was a webmaster for Keðjan.
        </SocialWorkBody>
      </Container>
    );
  }
}

export default HI;
