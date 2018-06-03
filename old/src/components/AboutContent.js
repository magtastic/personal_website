import React, { Component } from 'react';
import styled from 'styled-components'
import Profile from './Profile';
import MagnusSVG from './MagnusSVG';

const AboutSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameWrapper = styled.div`
  margin: auto;
  width: 300px
`

class About extends Component {
  render() {
    return (
      <AboutSection>
        <NameWrapper>
          <MagnusSVG />
        </NameWrapper>
        <Profile />
      </AboutSection>
    );
  }
}

export default About;
