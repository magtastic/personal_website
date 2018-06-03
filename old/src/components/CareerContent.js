import React, { Component } from 'react';
import styled from 'styled-components';
import Kvenno from './Kvenno';
import RUV from './RUV';
import Three65 from './365';
import HI from './HI';
import SocialWork from './SocialWork';
import Klang from './Klang';
import GameSmash from './GameSmash';

const CareerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

class Career extends Component {
  render() {
    return (
      <CareerSection>
        <GameSmash />
        <Klang />
        <SocialWork />
        <HI />
        <Three65 />
        <RUV />
        <Kvenno />
      </CareerSection>
    );
  }
}

export default Career;
