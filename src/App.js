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
      projects: [
        {
          nazwa: 'nazwa',
          url: 'http://google.com',
        },
        {
          nazwa: 'cosinnego',
          url: 'http://google.com',
        }
      ]
    }
  }

  openGithubLink = (project) => {window.open(`${project.url}`, '_blank')}


  render() {
    return (
      <div className="App">
        <Search/>
        <PersonalData
          profile={this.state.profile}
          openProject={this.openGithubLink}/>
      </div>
    );
  }
}

export default App;
