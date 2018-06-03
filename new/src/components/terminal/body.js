import React, { Component } from 'react';
import styled from 'styled-components';

const PREFIX = '➜ ';
const CURRENT_FOLDER_NAME = 'Magtastic';

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  padding: 3px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 500px;
`;

const InputLine = styled.div`
  display: flex;
  flex: 1;
  height: 30px;
  align-items: center;
  flex-direction: row;
  margin: 6px;
`;

const PreFixText = styled.p`
  color: rgb(0,188,55);
  font-weight: bold;
  padding-right: 10px;
`;

const FolderText = styled.p`
  color: rgb(0,187,198);
  font-weight: bold;
  padding-right: 10px;
`;

const UserInput = styled.input`
  background-color: transparent;
  border-color: transparent;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: transparent;
  text-shadow: 0 0 0 rgb(0,253,59);
  font-family: "Fira Code";
  font-size: 11pt;
  width: ${props => (props.value.length) * 8.9}px;
`;

const Pointer = styled.span`
  background-color: ${props => (props.visible ? 'rgb(0,253,59)' : 'transparent')};
  left: 10px;
  width: 10px;
  height: 70%;
`;


export default class Body extends Component {
  constructor(props) {
    super(props);
    this.showPointer = this.showPointer.bind(this);
    this.hidePointer = this.hidePointer.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.state = {
      pointerVisible: true,
      userInput: '',
    };
  }

  componentDidMount() {
    this.showPointer();
  }

  showPointer() {
    this.setState({ pointerVisible: true });
    setTimeout(() => {
      this.hidePointer();
    }, 600);
  }

  hidePointer() {
    this.setState({ pointerVisible: false });
    setTimeout(() => {
      this.showPointer();
    }, 600);
  }

  handleUserInput(e) {
    this.setState({ userInput: e.target.value });
  }

  render() {
    return (
      <Container>
        <InputLine>
          <PreFixText>
            {PREFIX}
          </PreFixText>

          <FolderText>
            {CURRENT_FOLDER_NAME}
          </FolderText>
          <UserInput
            spellCheck={false}
            value={this.state.userInput}
            onChange={this.handleUserInput}
          />
          <Pointer visible={this.state.pointerVisible} />
        </InputLine >
      </Container >
    );
  }
}
