import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import ActionManager from '../../data/actionManager';
import {
  COMMAND_LINE_PREFIX,
  CURRENT_FOLDER_NAME,
  INITIAL_INPUT,
  WELCOME_MESSAGES,
} from '../../data/constants';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 0 0 auto;

  width: 100%;

  height: 600px;

  padding: 3px;

  overflow: scroll;

  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;

  background-color: rgba(0, 0, 0, 0.7);

  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    border-bottom-left-radius: 3.5px;
    border-bottom-right-radius: 3.5px;
  }

  @media only screen and (max-device-height: 700px) {
    height: 500px;
  }

  @media only screen and (max-device-height: 600px) {
    height: 450px;
  }
`;

const InputLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;

  height: 20px;
  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    left: ${props => props.lineLength * 5 + 14}px;
    height: 10px;
  }
`;

const PreFixText = styled.p`
  padding-right: 10px;

  font-weight: bold;

  color: ${props => (props.isValid ? 'rgb(0,188,55)' : 'rgb(203,56,41)')};
  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 8px;
  }
`;

const FolderText = styled.p`
  padding-right: 10px;

  font-weight: bold;

  color: rgb(0, 187, 198);
  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    padding-right: 5px;
    font-size: 8px;
  }
`;

const UserInput = styled.input`
  width: 100%;

  background-color: transparent;
  border-color: transparent;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  cursor: default !important;

  font-family: 'Fira Code';
  font-size: 11pt;

  caret-color: transparent;
  color: transparent;
  text-shadow: 0 0 0 rgb(0, 253, 59);

  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 8px;
  }
`;

const Pointer = styled.span`
  position: absolute;
  left: ${props => props.lineLength * 9 + 30}px;
  width: 10px;
  height: 20px;

  background-color: ${props =>
    props.visible ? 'rgb(0,253,59)' : 'transparent'};

  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    left: ${props => props.lineLength * 5 + 14}px;
    width: 5px;
    height: 10px;
  }
`;

const Body = () => {
  /*  ===    CLASS VARIABLES    === */
  const w = useRef(null);
  const userInputReference = useRef(null);
  const scrollView = useRef(null);

  const [pointerVisible, setPointerVisible] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [commandIsValid, setCommandIsValid] = useState(true);
  const [commandHistory, setCommandHistory] = useState(true);

  const getOutputLine = (output, index) => {
    return (
      <InputLine key={`${commandHistory.length}:${index} answer`}>
        <UserInput readOnly spellCheck={false} value={output} />
      </InputLine>
    );
  };

  const setInitalWelcomeScreen = () => {
    const outputs = WELCOME_MESSAGES.map((output, outputIndex) =>
      getOutputLine(output, outputIndex),
    );
    setCommandHistory(outputs);
  };

  const writeToConsole = command => {
    const timeBetweenInput = 90;
    command.split('').forEach((char, index) => {
      setTimeout(() => {
        setUserInput(userInput.concat(char));
      }, timeBetweenInput * (index + 1));
    });
  };

  useEffect(() => {
    setInitalWelcomeScreen();
    const intervalId = setInterval(() => {
      setPointerVisible(!pointerVisible);
    }, 600);
    setPointerVisible(true);
    writeToConsole(INITIAL_INPUT);
    w.current = window; // eslint-disable-line
    if (userInputReference.current) {
      userInputReference.current.focus();
    }
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getInputLine = input => {
    return (
      <InputLine key={`${commandHistory.length} command`}>
        <PreFixText isValid={commandIsValid}>{COMMAND_LINE_PREFIX}</PreFixText>
        <FolderText>{CURRENT_FOLDER_NAME}</FolderText>
        <UserInput readOnly spellCheck={false} value={input} />
      </InputLine>
    );
  };

  /*  ===    ACTIONS    === */
  const openURL = url => {
    if (w.current) {
      w.current.open(url, '_blank');
    }
  };

  const addToHistory = (input, outputs, isValid) => {
    const command = getInputLine(input);

    const answers = outputs.map((output, outputIndex) =>
      getOutputLine(output, outputIndex),
    );

    setUserInput('');
    setCommandIsValid(isValid);
    const updatedHistory = [...commandHistory, [command, answers]];
    setCommandHistory(updatedHistory);
    if (scrollView.current) {
      scrollView.current.scrollTop = scrollView.current.scrollHeight;
    }
  };

  const clearHistory = () => {
    setCommandHistory([]);
    setUserInput('');
    setCommandIsValid(true);
  };

  const handleUserInput = e => {
    setUserInput(e.target.value);
  };

  const actionManager = useRef(
    new ActionManager(addToHistory, clearHistory, openURL),
  );

  const handleEnter = () => {
    const command = userInput.split(' ');
    actionManager.current.handleInput(command);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleEnter();
    }
  };

  return (
    <Container
      onClick={() => {
        if (userInputReference.current) {
          userInputReference.current.focus();
        }
      }}
      innerRef={scrollView}
    >
      {commandHistory}
      <InputLine>
        <PreFixText isValid={commandIsValid}>{COMMAND_LINE_PREFIX}</PreFixText>

        <FolderText>{CURRENT_FOLDER_NAME}</FolderText>
        <UserInput
          spellCheck={false}
          autoCapitalize="none"
          value={userInput}
          onChange={handleUserInput}
          onKeyPress={handleKeyPress}
          innerRef={userInputReference}
        />
        <Pointer
          visible={pointerVisible}
          lineLength={
            COMMAND_LINE_PREFIX.length +
            CURRENT_FOLDER_NAME.length +
            userInput.length
          }
        />
      </InputLine>
    </Container>
  );
};

export default Body;
