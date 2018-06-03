import React, { Component } from 'react';
import styled from 'styled-components';
import QuoteSVG from './../assets/right-quotation-mark.svg';

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
  content:url("https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15401146_1229449300482314_6362136296206282842_n.jpg?oh=26476dc4879d40612e35aa30f7323d2a&oe=5A9ACABA");
`;

const ProfileContainer = styled.div`
  width: 28%;
`;

const Container = styled.div`
  margin: auto;
  width: 50%;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const Quote = styled.div`
  margin: auto;
  font-style: italic;
`;

const QuoteMarkStart = styled.img`
  position: absolute; 
  margin-top: -30px;
  margin-left: -250px;
  width: 80px;
  height: auto;
  opacity: 0.3;
  transform: rotate(180deg);
`;

const QuoteMarkEnd = styled.img`
  position: absolute; 
  margin-left: 180px;
  margin-top: -50px;
  width: 80px;
  height: auto;
  opacity: 0.3;
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <ProfileContainer>
          <ProfilePicture />
        </ProfileContainer>
        <Quote>
          <QuoteMarkStart src={QuoteSVG}/>
          <p>
           Hey! Welcome to the website! 
           I am Magnús, your avarge JS perv.
           Have a look around!
          </p>
          <QuoteMarkEnd src={QuoteSVG}/>
        </Quote>
      </Container>
    );
  }
}

export default Header;
