import React, { Component } from 'react';
import styled from 'styled-components'
import SocialMediaHeader from './SocialMediaHeader'
import GithubSocialSection from './GithubSection'
import TwitterSocialSection from './TwitterSection'
import FacebookSocialSection from './FacebookSection'
import GmailSocialSection from './GmailSection'

const SocialSection = styled.div`
  border-radius: 5px;
  padding: 10px 0px 10px 0px;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 80%;
`;

class SocialMedia extends Component {
  render() {
    return (
      <SocialSection>
        <SocialMediaHeader />
        <TwitterSocialSection />
        <FacebookSocialSection />
        <GithubSocialSection />
        <GmailSocialSection/>
      </SocialSection>
    );
  }
}

export default SocialMedia;
