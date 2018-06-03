import React, { Component } from 'react';
import styled from 'styled-components'
import GithubSocialSection from './GithubSection'
import TwitterSocialSection from './TwitterSection'
import FacebookSocialSection from './FacebookSection'
import GmailSocialSection from './GmailSection'

const MyFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 60px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

class SocialMediaBar extends Component {
  render() {
    return (
      <MyFooter>
        <TwitterSocialSection />
        <FacebookSocialSection />
        <GithubSocialSection />
        <GmailSocialSection/>
      </MyFooter>
    );
  }
}

export default SocialMediaBar;
