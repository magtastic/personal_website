import React, { Component } from 'react';
import firebase from 'firebase';
import styled from 'styled-components'
import fire from './../database/firebase';
import CurrentProfile from './CurrentUserProfile';
import CustomComment from './CustomComment';
import UserComment from './UserComment';
import FacebookLogo from './../assets/facebook.svg';
import GoogleLogo from './../assets/google.svg';

const commentRef = fire.database().ref('comments');
const profileRef = fire.database().ref('profiles');
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
`;
const FacebookButton = styled.button`
  height: 30px;
  background-color: #3c5a99;
  color: white;
  margin: 10px;
`;
const GoogleButton = styled.button`
  height: 30px;
  margin: 10px;
  padding: 10px;
`;
const FacebookImg = styled.img`
  height: 100%;
  width: auto;
`;
const GoogleImg = styled.img`
  height: 200%;
  width: auto;
`;


const CommentSection = styled.div``;
const CommentForm = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;
  height: 120px;
  text-align: center;
`;

class Comments extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      comments: [],
      loggedInUser: {
        uid: undefined,
      },
    };

    this.listenToAuthChange();
  }

  componentWillMount() {
    this.listenToComments();
  }

  listenToAuthChange() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState((prevState) =>  { 
          prevState.loggedInUser.uid = user.uid;
          return prevState;
        });
        this.listenToProfileChange(user.uid);
        // User is signed in.
      } else {
        this.setState({ loggedInUser: { uid: undefined } });
      }
    });
  }

  listenToProfileChange(userID) {
    profileRef.child(userID).on('value', (snap) => {
      const profile = snap.val();
      const googleProfile = profile.google;
      const facebookProfile = profile.facebook;
      let profilePictureURL;
      let displayName;
      if (facebookProfile) {
        profilePictureURL = facebookProfile.picture.data.url;
        displayName = `${facebookProfile.first_name}${' ' +facebookProfile.last_name || ''}`;
      } else if (googleProfile) {
        profilePictureURL = googleProfile.picture;
        displayName = `${googleProfile.given_name}${' ' + googleProfile.family_name || ''}`;
      }
      this.setState((prevState) => {
        prevState.loggedInUser.profilePictureURL = profilePictureURL; 
        prevState.loggedInUser.displayName = displayName; 
        return prevState;
      });
    });
  }

  listenToComments() {
    commentRef.on('child_added', (snap) => {
      this.setState({
        comments: this.state.comments.concat(snap.val()),
      });
    });
  }

  sendComment(text) {
    const comment = {
      text: text,
      name: this.state.loggedInUser.displayName,
      picture: this.state.loggedInUser.profilePictureURL,
      userID: this.state.loggedInUser.uid,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    }
    commentRef.push(comment);
  }

  handleSignIn(provider) {
    fire.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const userID = result.user.uid;
        const provider = result.additionalUserInfo.providerId.replace('.com', '');
        const profile = result.additionalUserInfo.profile;
        if (provider && profile) {
          profileRef
            .child(`${userID}/${provider}`)
            .set(profile);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logOutUser() {
    console.log('loggin out current user');
    fire.auth().signOut().then(() => {
      // Sign-out successful.
      this.setState({ loggedInUser: {uid: undefined } });
    }, (err) => {
      console.log(err);
      // An error happened.
    });
  }

  render() {
    return (
      <div>
        {
          this.state.loggedInUser.uid ? (
            // LOGGED IN
        <CommentForm>
          <CurrentProfile 
            src={this.state.loggedInUser.profilePictureURL} logOutMethod={this.logOutUser.bind(this)}
          />
          <CustomComment 
            displayName={this.state.loggedInUser.displayName || ''}
            sendComment={this.sendComment.bind(this)} 
          />
        </CommentForm>

          ): (
            // NOT LOGGED IN
            <LoginForm>
              <FacebookButton onClick={() => this.handleSignIn(facebookProvider)}> 
              <FacebookImg src={FacebookLogo}/>
              Facebook sign in 
              </FacebookButton>
              <GoogleButton onClick={() => this.handleSignIn(googleProvider)}>
              <GoogleImg src={GoogleLogo}/>
               Google sign in 
               </GoogleButton>
            </LoginForm>
          )
        }
        <CommentSection>
          {
            this.state.comments.map (
              (comment, index) => <UserComment key={index} comment={comment} />
            )
          }
        </CommentSection>
      </div>
       );
  }
}

export default Comments;
