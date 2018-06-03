import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const SchoolHeader = styled.p`
  text-align: center;
  font-size: 30pt;
`;

const SchoolBody = styled.div`
`;

class HI extends Component {
  render() {
    return (
      <Container>
        <SchoolHeader>
          University of Iceland
        </SchoolHeader>
        <SchoolBody>
          Started Software Engineering 2014.
        </SchoolBody>
      </Container>
    );
  }
}

export default HI;
