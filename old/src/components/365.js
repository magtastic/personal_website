import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Three65Header = styled.p`
  text-align: center;
  font-size: 30pt;
`;

const Three65Body = styled.div`
`;

class Three65 extends Component {
  render() {
    return (
      <Container>
        <Three65Header>
          365
        </Three65Header>
        <Three65Body>
          Early 2014 I started working for 365.
          I was a video editor, and mainly worked on the news.
        </Three65Body>
      </Container>
    );
  }
}

export default Three65;
