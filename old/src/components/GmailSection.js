import React, { Component } from 'react';
import styled from 'styled-components';
import gmailLogo from './../assets/gmail.svg';
import EmailFrom from './EmailForm';

const GmailSection = styled.div`
  filter: drop-shadow(0 0 5px #333);
  border-radius: 5px;
  margin: 10px 0px 10px 0;
  background-color: white;
  width: 100%;
  text-align: center;
  align-items: center;
  padding: 6px 6px 6px 6px;
`

const GmailTabDiv = styled.div`
  cursor: pointer;
`

const GmailLogoContainer = styled.div`
  float: left;
  width: 20px;
  heigth: auto;
`

const GmailImg = styled.img`
  width: 100%;
`

const GmailHeader = styled.p`
  color: black;
  font-size: 12pt;
  margin: 0;
  top: 0;
`

const GmailText = styled.p`
  color: black;
  font-size: 9pt;
  margin: 4px 4px 4px 4px;
`

class GmailSocialSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  handleClick() {
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    return (
      <div>
        <GmailSection>
          <GmailTabDiv onClick={ this.handleClick.bind(this) }>
            <GmailLogoContainer>
              <GmailImg src={gmailLogo} />
            </GmailLogoContainer>
            <GmailHeader> Magnusol93@gmail.com </GmailHeader>
            <GmailText> Send me a line! </GmailText>
          </GmailTabDiv>
        </GmailSection>
        {
          this.state.showForm ? <EmailFrom /> : ''
        }
      </div>
    );
  }
}

export default GmailSocialSection;
