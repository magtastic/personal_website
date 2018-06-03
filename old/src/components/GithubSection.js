import React, { Component } from 'react';
import styled from 'styled-components'
import request from 'request'
import githubLogo from './../assets/github.svg'

const GithubSection = styled.div`
  filter: drop-shadow(0 0 5px #333);
  border-radius: 5px;
  margin: 10px 0px 10px 0;
  background-color: #24292e;
  width: 100%;
  text-align: center;
  padding: 6px 6px 6px 6px;
`

const GithubLogoContainer = styled.div`
  float: left;
  width: 20px;
  heigth: auto;
`

const GitHeader = styled.p`
  color: white;
  font-size: 9pt;
  margin: 0;
  top: 0;
`

const GitRepo = styled.p`
  color: white;
  font-size: 8pt;
  margin: 0;
  top: 0;
`

const GithubImg = styled.img`
  width: 100%;
`

const GithubLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const GithubLink = styled.a`
  color: white;
  bottom: 0;
  margin: 4px 6px 0px 6px;
  font-size: 1.2vw;
  position: relative;

  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -5px;
    left: 0;
    background-color: white;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`

function getGithubActivity() {
  return new Promise((resolve, reject) => {
    const uri = 'https://api.github.com/users/magtastic/events'
    request(uri, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Magtastic' 
      },
    }, (err, res, body) => {
      if (err) {
        reject(err)
      } else {
        const results = JSON.parse(body);
        let newest = new Date(0);
        let newestEvent;
        results.forEach((result) => {
          if (result.type === 'PushEvent') {
            const date = new Date(result.created_at);
            if (date > newest) {
              newest = date;
              newestEvent = result;
            }
          }
        })
        resolve(newestEvent);
      }
    });
  });
}

class GithubSocialSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: {
          id: 'fetching...',
          repo: {
            name: 'fetching...',
          }
      },
    };

    getGithubActivity()
      .then((github) => {
        console.log(github)
        this.setState({ github: github })
      })
      .catch((err) => {
        this.setState({ github: {
          id: `Error code: ${err.code}`,
          repo: {
            name: 'error fetching github data.',
          },
        }});
      });
  }

  render() {
    return (
      <GithubSection>
        <GithubLogoContainer>
          <GithubImg src={githubLogo} />
        </GithubLogoContainer>
        <GitHeader> Last push Magtastic made: </GitHeader>
        <GitRepo> Repo: {this.state.github.repo.name} </GitRepo>
        <GithubLinks>
          <GithubLink href={`http://github.com/${this.state.github.repo.name}`}> View Repository </GithubLink>
          <GithubLink href="http://github.com/magtastic"> View Magtastics </GithubLink>
        </GithubLinks>
      </GithubSection>
    );
  }
}

export default GithubSocialSection;
