import React, { Component } from 'react';
import styled from 'styled-components'

const BigLetter = styled.p`
  top: 0;
  line-height: 100%;
  margin: 0;
  text-align: center;
  padding-top: 0px;
  font-size: 10vh;
  opacity: 0.2;
  position: absolute;
`;

class BigNavLetter extends Component {
  constructor(props) {
    super(props);
    this.state = props
  }

  render() {
    return (
      <BigLetter>
        {
          this.state.letter
        }
      </BigLetter>
    );
  }
}

export default BigNavLetter;
