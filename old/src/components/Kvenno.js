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

class Kvenno extends Component {
  render() {
    return (
      <Container>
        <SchoolHeader>
          Kvennaskólinn í Reykjavík
        </SchoolHeader>
        <SchoolBody>
          I started in highschool in the autumn of 2009,
          focusing on natural sciences.
          Graduated four years later, 2014.
        </SchoolBody>
      </Container>
    );
  }
}

export default Kvenno;
