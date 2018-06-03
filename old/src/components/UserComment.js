import React, { Component } from 'react';
import styled from 'styled-components'
import UserProfile from './UserProfile'

var DATE_OPTIONS = {
  // weekday: 'long',
  year: 'numeric',
  month: 'long', 
  day: 'numeric',
};

const Comment = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const CommentHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const CommentBody = styled.div`
`;
const CommentHeaderText = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;
const CommentName = styled.p`
  font-weight: 600;
  margin: 0px;
`;
const CommentText = styled.p`
  margin: 0px;
  font-style: italic;
  text-align: center;
  font-size: ${props => props.shouldBeBig? '32pt' : '20pt'};
`;
const CommentTimestamp = styled.p`
  margin: 0px;
  font-size: .6em;
`;

class UserComment extends Component {
  constructor(props) {
    super(props);
    this.state = props.comment;
  }

  componentWillReceiveProps(props) {
    this.setState({ props })
  }

  render() {
    return (
          <Comment>
            <CommentBody>
              <CommentText shouldBeBig={this.state.text.lenght < 10}> 
                { `"${this.state.text}"` }
              </ CommentText> 
            </CommentBody>
            <CommentHeader>
              <UserProfile src={this.state.picture}/> 
              <CommentHeaderText>
                <CommentName> 
                  { this.state.name }
                </ CommentName> 
                <CommentTimestamp> 
                  { 
                    new Date(this.state.timestamp).toLocaleDateString('en-US', DATE_OPTIONS) 
                  }
                </ CommentTimestamp> 
              </CommentHeaderText>
            </CommentHeader>
          </Comment>
       );
  }
}

export default UserComment;
