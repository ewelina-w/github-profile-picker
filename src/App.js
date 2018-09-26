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
    },
    projects: [
      {
        name: 'nazwa',
        url: 'http://google.com',
      },
      {
        name: 'cosinnego',
        url: 'http://google.com',
      }
    ]

  }

  openGithubLink = (project) => {window.open(`${project.url}`, '_blank')}

  hideGithubLink = (project) => {
    this.setState((state) => ({
      projects: state.projects.filter((p) => p.name !== project.name)
    }))
  }

  render() {
    return (
      <div className="App">
        <Search/>
        <PersonalData
          profile={this.state.profile}
          projects={this.state.projects}
          openProject={this.openGithubLink}
          hideProject={this.hideGithubLink}/>
      </div>
    );
  }
}

export default App;
