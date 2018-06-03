import React, { Component } from 'react';
import styled from 'styled-components'
import twitterLogo from './../assets/twitter.svg'
import Twitter from 'twitter';
import { Tweet } from 'react-twitter-widgets'
 
const client = new Twitter({
  consumer_key: 'YJtzD0SgrKPGs2yrFR91BPYKn',
  consumer_secret: 'itvScLZWvNgVFRLrkRaLspgn1WO6JXSc5xfMNf5cdZrdyvYNUA',
  access_token_key: '2429613706-TySrGtWbyQ9gFq8GIM6MKnLs9tTGbvsySRBEuOo',
  access_token_secret: 'Tfc4EXQvovRJDMRZenZ3nss2o5umos1sVXPXbNtbC3ZaE'
});
 
const TwitterSection = styled.div`
  filter: drop-shadow(0 0 5px #333);
  border-radius: 5px;
  margin: 10px 0px 10px 0;
  background-color: #1da1f2;
  width: 100%;
  text-align: center;
  padding: 6px 6px 6px 6px;
  display: flex;
  flex-direction: column;
`

const TwitterHeader = styled.div`
  width: 100%;
`;

const TwitterLogoContainer = styled.div`
  float: left;
  width: 20px;
  heigth: auto;
`

const TwitterHeaderText = styled.p`
  color: white;
  font-size: 9pt;
  margin: 0;
  top: 0;
`

const TwitterImg = styled.img`
  width: 100%;
`
const TweetWrapper = styled.div`
  margin: auto;
`;

function getTweet() {
  return new Promise((res, rej) => {
    var params = { screen_name: 'MLafsson', count: '1' };
    client.get('statuses/user_timeline', params, (error, tweets, response) => {
      if (!error) {
        res(tweets[0]);
      } else {
        rej(error);
      }
    });
  });
}

class TwitterSocialSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: {
          id: 'fetching...',
      }
    };
    getTweet()
      .then((tweet) => {
        this.setState({ tweet: tweet})
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ tweet: {
          id: `Error code: ${err.code}`,
        }});
      });
  }

  render() {
    return (
      <TwitterSection>
        <TwitterHeader>
          <TwitterLogoContainer>
            <TwitterImg src={twitterLogo} />
          </TwitterLogoContainer>
          <TwitterHeaderText> Last tweet from @MLafsson </TwitterHeaderText>
        </TwitterHeader>
        <TweetWrapper>
          <Tweet tweetId={this.state.tweet.id_str} />
        </TweetWrapper>
      </TwitterSection>
    );
  }
}

export default TwitterSocialSection;
