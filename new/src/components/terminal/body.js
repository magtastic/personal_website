import React, { Component } from 'react';
import styled from 'styled-components';
import ActionManager from '../../data/actionManager';
import {
  COMMAND_LINE_PREFIX,
  CURRENT_FOLDER_NAME,
  WELCOME_MESSAGE,
} from '../../data/constants';


const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 0 0 auto;

  width: 100%;
  height: 500px;

  padding: 3px;

  overflow: scroll;

  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;

  background: rgba(0,0,0,0.5);
`;

const InputLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;

  height: 20px;
`;

const PreFixText = styled.p`
  padding-right: 10px;

  font-weight: bold;

  color: rgb(0,188,55);
`;

const FolderText = styled.p`
  padding-right: 10px;

  font-weight: bold;

  color: rgb(0,187,198);
`;

const UserInput = styled.input`
  width: 100%;

  background-color: transparent;
  border-color: transparent;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  cursor: default !important;

  font-family: "Fira Code";
  font-size: 11pt;

  color: transparent;
  text-shadow: 0 0 0 rgb(0,253,59);
`;

const Pointer = styled.span`
  position: absolute;
  left: ${props => ((props.lineLength) * 9) + 30}px;
  width: 10px;
  height: 20px;

  background-color: ${props => (props.visible ? 'rgb(0,253,59)' : 'transparent')};
`;


export default class Body extends Component {
  constructor(props) {
    super(props);

    /*  ===    BINDINGS    === */
    this.setPointerVisibility = this.setPointerVisibility.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.writeToConsole = this.writeToConsole.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addToHistory = this.addToHistory.bind(this);
    this.getOutputLine = this.getOutputLine.bind(this);
    this.getInputLine = this.getInputLine.bind(this);
    this.setInitalWelcomeScreen = this.setInitalWelcomeScreen.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
    this.openURL = this.openURL.bind(this);

    /*  ===    CLASS VARIABLES    === */
    this.actionManager = new ActionManager(this.addToHistory, this.clearHistory, this.openURL);
    this.w = null;

    /*  ===    INITAL STATE    === */
    this.state = {
      pointerVisible: true,
      userInput: '',
      commandHistory: [],
    };
  }

  componentDidMount() {
    this.setInitalWelcomeScreen();
    this.setPointerVisibility(true);
    this.writeToConsole(WELCOME_MESSAGE);

    this.userInputReference.focus();
    this.w = window; // eslint-disable-line
  }

  setInitalWelcomeScreen() {
    const outputs = [
      'Welcome to...',
      '',
      '.##.....##....###.....######...########.########.########..##.....##',
      '.###...###...##.##...##....##.....##....##.......##.....##.###...###',
      '.####.####..##...##..##...........##....##.......##.....##.####.####',
      '.##.###.##.##.....##.##...####....##....######...########..##.###.##',
      '.##.....##.#########.##....##.....##....##.......##...##...##.....##',
      '.##.....##.##.....##.##....##.....##....##.......##....##..##.....##',
      '.##.....##.##.....##..######......##....########.##.....##.##.....##',
      '',
    ].map((output, outputIndex) => this.getOutputLine(output, outputIndex));
    this.setState({ commandHistory: outputs });
  }

  setPointerVisibility(pointerVisible) {
    this.setState({ pointerVisible });

    setTimeout(() => {
      this.setPointerVisibility(!pointerVisible);
    }, 600);
  }

  getInputLine(input) {
    return (
      <InputLine
        key={`${this.state.commandHistory.length} command`}
      >
        <PreFixText>
          {COMMAND_LINE_PREFIX}
        </PreFixText>
        <FolderText>
          {CURRENT_FOLDER_NAME}
        </FolderText>
        <UserInput
          readOnly
          spellCheck={false}
          value={input}
        />
      </InputLine>
    );
  }


  getOutputLine(output, index) {
    return (
      <InputLine
        key={`${this.state.commandHistory.length}:${index} answer`}
      >
        <UserInput
          readOnly
          spellCheck={false}
          value={output}
        />
      </InputLine>);
  }

  writeToConsole(command) {
    const timeBetweenInput = 90;
    command.split('').forEach((char, index) => {
      setTimeout(() => {
        this.setState(state => (
          { userInput: state.userInput.concat(char) }
        ));
      }, timeBetweenInput * (index + 1));
    });
  }

  /*  ===    ACTIONS    === */
  openURL(url) {
    if (this.w) {
      this.w.open(url, '_blank');
    }
  }

  addToHistory(input, outputs) {
    const command = this.getInputLine(input);

    const answers = outputs.map((output, outputIndex) => this.getOutputLine(output, outputIndex));

    this.setState((state) => {
      const updatedHistory = [...state.commandHistory, [command, answers]];
      return { commandHistory: updatedHistory, userInput: '' };
    }, () => {
      this.scrollView.scrollTop = this.scrollView.scrollHeight;
    });
  }

  clearHistory() {
    this.setState({ commandHistory: [], userInput: '' });
  }


  /*  ===    INPUT HANDLERS    === */
  handleEnter() {
    const command = this.state.userInput.split(' ');
    this.actionManager.handleInput(command);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleEnter();
    }
  }

  handleUserInput(e) {
    this.setState({ userInput: e.target.value });
  }

  render() {
    return (
      <Container
        onClick={() => this.userInputReference.focus()}
        innerRef={(input) => { this.scrollView = input; }}
      >
        {this.state.commandHistory}
        <InputLine>
          <PreFixText>
            {COMMAND_LINE_PREFIX}
          </PreFixText>

          <FolderText>
            {CURRENT_FOLDER_NAME}
          </FolderText>
          <UserInput
            spellCheck={false}
            value={this.state.userInput}
            onChange={this.handleUserInput}
            onKeyPress={this.handleKeyPress}
            innerRef={(input) => { this.userInputReference = input; }}
          />
          <Pointer
            visible={this.state.pointerVisible}
            lineLength={
              COMMAND_LINE_PREFIX.length +
              CURRENT_FOLDER_NAME.length +
              this.state.userInput.length
            }
          />
        </InputLine >
      </Container >
    );
  }
}
