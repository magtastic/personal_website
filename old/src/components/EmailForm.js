import React, { Component } from 'react';
import styled from 'styled-components';
import fire from './../database/firebase';
import { setTimeout } from 'timers';

const From = styled.div`
  filter: drop-shadow(0 0 5px #333);
  border-radius: 5px;
  margin: 10px 0px 10px 0;
  background-color: white;
  width: 100%;
  text-align: center;
  align-items: center;
  padding: 6px 6px 6px 6px;
`;

const NameInput = styled.input`
  outline: none;
  border-width:0px;
  border:none;
  width: 60%;
  border-bottom: 1px solid;
  background-color: ${props => props.err ? 'rgba(255, 34, 42, 0.2)' : 'white' };
`;

const EmailInput = styled.input`
  outline: none;
  border-width:0px;
  border:none;
  width: 60%;
  border-bottom: 1px solid;
  background-color: ${props => props.err ? 'rgba(255, 34, 42, 0.2)' : 'white' };
`

const TextInput = styled.textarea`
  outline: none;
  border-width:0px;
  border:none;
  width: 60%;
  background-color: ${props => props.err ? 'rgba(255, 34, 42, 0.2)' : 'white' };
`

const SendButton = styled.button`
  background: #34d976;
  background-image: -webkit-linear-gradient(top, #34d976, #32b82b);
  background-image: -moz-linear-gradient(top, #34d976, #32b82b);
  background-image: -ms-linear-gradient(top, #34d976, #32b82b);
  background-image: -o-linear-gradient(top, #34d976, #32b82b);
  background-image: linear-gradient(to bottom, #34d976, #32b82b);
  -webkit-border-radius: 10;
  -moz-border-radius: 10;
  border-radius: 10px;
  color: #ffffff;
  padding: 10px 30px 10px 30px;
  text-decoration: none;
  width: 80%;
`

class EmailForm extends Component {

  constructor(porps) {
    super(porps);
    this.state = {
      name: undefined,
      email: undefined,
      text: undefined,
      nameErr: false,
      emailErr: false,
      textErr: false,
    };
  }

  handleChange(event) {
    const inputValue = event.target.value;
    switch (event.target.id) {
      case 'nameInput':
        this.setState({ name: inputValue });
        break;
      case 'emailInput':
        this.setState({ email: inputValue });
        break;
      case 'textInput':
        this.setState({ text: inputValue });
        break;
    }
  }

  sendEmail(event) {
    event.preventDefault();
    const { name, email, text } = this.state;
    if (name && email && text) {
      fire.database().ref('emails')
        .push(this.state)
        .then(() => {
          this.setState({ statusText: 'Email has been sent!' });
          setTimeout(() => {
            this.setState({ statusText: ' ' });
          }, 3000);
        });
      console.log('sending email...');
    } else {
      if (!name) {
        this.setState({ nameErr: true });
      }
      if (!email) {
        this.setState({ emailErr: true });
      }
      if (!text) {
        this.setState({ textErr: true });
      }
      setTimeout(() => {
        this.setState({ 
          nameErr: false, 
          emailErr: false, 
          textErr: false 
        });
      }, 3000)
      console.log('displaying red input...');
    }
  }

  render() {
    return (
      <From>
        <NameInput type="text" 
        id="nameInput" 
        placeholder="Your name" 
        err={this.state.nameErr}
        onChange={this.handleChange.bind(this)}/>

        <EmailInput type="text" 
        id="emailInput" 
        placeholder="Your email" 
        err={this.state.emailErr}
        onChange={this.handleChange.bind(this)}/>

        <TextInput rows="5" 
        id="textInput" 
        placeholder="Hey! cool website! We should meet up!" 
        err={this.state.textErr}
        onChange={this.handleChange.bind(this)}/>

        <SendButton onClick={this.sendEmail.bind(this)}> Send! </SendButton>
        <p> { this.state.statusText } </p>
      </From>
    );
  }
}

export default EmailForm;
