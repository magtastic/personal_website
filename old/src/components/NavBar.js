import React, { Component } from 'react'
import styled from 'styled-components'
import BigNavBarLetter from './BigNavBarLetter';


const MyNav = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  margin: auto;
  font-size: 20pt;
`

const Tab = styled.a`
  text-align: center;
  width: 100%;
  line-height: 80px;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  background-color: ${props => props.color};
`

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tabs: [
        { name: 'Welcome', color: '#1abc9c' },
        { name: 'Career', color: '#3498db' },
        { name: 'Comments', color: '#F4D03F' },
        { name: 'Social Media', color: '#9b59b6' },
      ],
    } 
  }

  tabChange(tab) {
    this.props.onPropertyChange(tab);
  }

  render() {
    return (
      <MyNav>
        { 
          this.state.Tabs.map (
            (tab, index) => {
              return <Tab color={ tab.color } 
                          onClick={() => this.tabChange({tab})} 
                          key={index}> 
                          <BigNavBarLetter letter={ tab.name.charAt(0) }/>
                          { tab.name.toUpperCase() } 
                    </Tab>
            }
          )
        }
      </MyNav>
    );
  }
}

export default NavBar;