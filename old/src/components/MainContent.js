import React, { Component } from 'react';
import styled from 'styled-components';
import Comments from './CommentsContent';
import Career from './CareerContent';
import About from './AboutContent';
import SocialMedia from './SocialMediaContent';

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1em;
  background: ${ props => props.color };
`

class MainContent extends Component {

  constructor(props) {
    super(props);
    switch (props.tab.name) {
      case 'Career':
        this.state = {
          content: <Career />,
          color: props.tab.color,
        };
        break;
      case 'Comments':
        this.state = {
          content: <Comments />,
          color: props.tab.color,
        };
        break;
      case 'Social Media':
        this.state = {
          content: <SocialMedia />,
          color: props.tab.color,
        };
        break;
      case 'Welcome':
        this.state = {
          content: <About />,
          color: props.tab.color,
        };
    }
  }

  componentWillReceiveProps(props) {
    document.body.style.background = props.tab.color;
    switch (props.tab.name) {
      case 'Social Media':
        this.setState({
          content: <SocialMedia />,
          color: props.tab.color,
        });
        break;
      case 'Career':
        this.setState({
          content: <Career />,
          color: props.tab.color,
        });
        break;
      case 'Comments':
        this.setState({
          content: <Comments />,
          color: props.tab.color,
        });
        break;
      case 'Welcome':
        this.setState({
          content: <About />,
          color: props.tab.color,
        });
    }
  }

  render() {
    return (
      <Content color={ this.state.color }> 
        { this.state.content }
      </Content>
    );
  }
}

export default MainContent;
