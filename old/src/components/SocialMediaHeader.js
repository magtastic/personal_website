import React, { Component } from 'react';
import styled from 'styled-components'

const AppHeader = styled.header`
  height: 10%;
  padding: 20px;
  color: black;
  text-align: center;
`;

class SocialMediaHeader extends Component {
  render() {
    return (
      <AppHeader>
        <p>Whats up on Social Media!</p>
      </AppHeader>
    );
  }
}

export default SocialMediaHeader;
