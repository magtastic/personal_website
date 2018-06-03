import React, { Component } from 'react';
import styled from 'styled-components'

const CommentSection = styled.div`
  padding: 10px 40px 10px 40px;
  width: 100%;
`;
const ProfileName = styled.p`
  float: left;
  font-weight: bold;
  margin: 0px;
`;
const TextInput = styled.textarea`
  width: 100%;
`;

class CustomComment extends Component {
  constructor(props) { 
    super(props);
    console.log(props);
    this.state = {
      displayName: props.displayName,
      sendComment: props.sendComment,
      text: '',
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      displayName: props.displayName,
      sendComment: props.sendComment,
      text: '',
    });
  }

  sendComment() {
    console.log(this.state);
    if (this.state.text.length > 0) {
        this.state.sendComment(this.state.text);
    } else {
      // TODO: display error
    }
  }

  handleChange(event) {
    const inputValue = event.target.value;
    this.setState({ 
      text: inputValue,
    });
  }

  render() {
    return (
      <CommentSection>
        <ProfileName> {this.state.displayName || ''} </ProfileName>
        <TextInput rows="5" 
        id="textInput" 
        placeholder="Hey! cool website! We should meet up!" 
        onChange={this.handleChange.bind(this)}/>

        <button onClick={this.sendComment.bind(this)}> post your comment! </button>
      </CommentSection>
    );
  }
}

export default CustomComment;
