import React, { Component } from 'react';
import styled from 'styled-components'

const CustomProfile = styled.div`
  text-align: center;
  height: 100%;
`;
const ProfilePictureWrapper = styled.div`
  height: 80%;
  width: auto;
`;
const ProfilePicture = styled.img`
  height: 100%;
  border-radius: 50%;
`;

class CurrentProfile extends Component {
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

  logOutUser() {
    this.props.logOutMethod();
  }

  render() {
    return (
      <CustomProfile>
        <ProfilePictureWrapper>
          <ProfilePicture src={this.state.pictureURL}/>
        </ProfilePictureWrapper>
        <button onClick={this.logOutUser.bind(this)}> log out </button>
      </CustomProfile>
    );
  }
}

export default CurrentProfile;
