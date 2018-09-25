import React, { Component } from 'react';
// import './App.css';
import Search from './Search'
import PersonalData from './PersonalData'

class App extends Component {

  state = {
    profile: {
      link: 'link',
      email: 'e@email.pl',
      location: 'city',
      avatarURL: 'url("avatar.svg")',
      projects: []
    }
  }
  render() {
    return (
      <div className="App">
        <Search/>
        <PersonalData profile={this.state.profile}/>
      </div>
    );
  }
}

export default App;
