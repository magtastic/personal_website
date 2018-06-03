import React, { Component } from 'react';
import styled from 'styled-components'

const ProfilePictureWrapper = styled.div`
  height: 30px;
  width: auto;
`;
const ProfilePicture = styled.img`
  height: 100%;
  border-radius: 50%;
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureURL: props.src
    }
  };

  componentWillReceiveProps(props) {
    this.setState({
      pictureURL: props.src,
    });
  }

  render() {
    return (
      <ProfilePictureWrapper>
        <ProfilePicture src={this.state.pictureURL}/>
      </ProfilePictureWrapper>
    );
  }
}

export default Profile;
