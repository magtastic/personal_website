import React, { Component } from 'react';
import styled from 'styled-components'
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';

const NavRapperDiv = styled.div`
`

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      tab: { name: 'Welcome', color: '#1abc9c' },
    }
  }

  tabChange(tabObj) {
    this.setState({ tab: tabObj.tab })
  }

  render() {
    return (
      <div className="App">
        <NavRapperDiv>
          <NavBar onPropertyChange={this.tabChange.bind(this)} />
        </NavRapperDiv>

        <MainContent tab={ this.state.tab } />
      </div>
    );
  }
}

export default App;
