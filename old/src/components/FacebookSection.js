import React, { Component } from 'react';
import styled from 'styled-components'
import facebookLogo from './../assets/messenger.svg'

const FacebookSection = styled.div`
  filter: drop-shadow(0 0 5px #333);
  border-radius: 5px;
  margin: 10px 0px 10px 0;
  background-color: white;
  width: 100%;
  text-align: center;
  align-items: center;
  padding: 6px 6px 6px 6px;
`

const FacebookLogoContainer = styled.div`
  float: left;
  width: 20px;
  heigth: auto;
`

const FacebookImg = styled.img`
  width: 100%;
`
const FacebookHeader = styled.p`
  color:  #0084FF;
  font-size: 12pt;
  margin: 0;
  top: 0;
`
const FacebookText = styled.p`
  color:  #0084FF;
  font-size: 9pt;
  margin: 4px 4px 4px 4px;
`

class FacebookSocialSection extends Component {
  render() {
    return (
        <FacebookSection>
          <FacebookLogoContainer>
            <FacebookImg src={facebookLogo} />
          </FacebookLogoContainer>
          <FacebookHeader> Magnús Ólafsson </FacebookHeader>
          <FacebookText> Typically replies within a few hours </FacebookText>
        </FacebookSection>
    );
  }
}

export default FacebookSocialSection;
