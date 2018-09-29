import React, { Component } from 'react';
// import './App.css';
import Search from './Search'
import PersonalData from './PersonalData'

class App extends Component {

  state = {
    profile: {
      link: '',
      email: '',
      place: '',
      avatarURL: ''
    },
    projects: [],
    user: ''
  }

  openGithubLink = (project) => {window.open(`${project.url}`, '_blank')}

  hideGithubLink = (project) => {
    this.setState((state) => ({
      projects: state.projects.filter((p) => p.name !== project.name)
    }))
  }

// Listen for Githhub login
  newUser = (user) => {
    this.setState({ user: user.trim()})
  }


// Set data for choosen Github login
  setUser = () => {
    if(this.state.user.length>0) {
        this.getInfo();
        this.getRepo();
    }
  }

// Helper function to search for Github login on pressing Enter
    searchOnEnter = (e) => {
      if (e.key === 'Enter') {
        this.setUser();
        console.log('eneter')
      }
    }

// Get info from Github API
  getInfo () {

    const url = `https://api.github.com/users/${this.state.user}`;

    let flag = this
    var newData = {
      link: '',
      email: '',
      place: '',
      avatarURL: ''
    }

    fetch(url)
      .then(function (response) {
        if (response.status !== 200) {
          var error = 'No data available';
          var errorMessage = {
            link: 'No data available',
            email: 'No data available',
            place: 'No data available',
            avatarURL: 'No data available'
          }
          console.log(error);
          flag.setState({ profile: errorMessage })
          // powyższy błąd jest dobrze obsługiwany :)
      } else
        response.json()
          .then(function(response) {
            newData.link = response.url;
            newData.email = response.email;
            newData.place = response.location;
            newData.avatarURL = response.avatar_url;
            flag.setState({ profile: newData})
          }
        )
        .catch(function(error) {
        flag.setState(
          {
            link: 'Sorry, there is a problem with loading data',
            email: 'Sorry, there is a problem with loading data',
            place: 'Sorry, there is a problem with loading data',
            avatarURL: 'Sorry, there is a problem with loading data'
          }
        )
        }
      );
      }
    )
}

// Get repos from Github API
getRepo () {
  const url = `https://api.github.com/users/${this.state.user}/repos`;
  let flag = this;
  var newProjects = [];
  fetch(url)
    .then(function (response) {
      if (response.status !== 200) {
          var error = ['Sorry, there is a problem with loading data'];
          flag.setState(
            [{name:'No data available'}]
          )
        }
      response.json()
        .then(function(response) {
          newProjects = response;
          newProjects.map((newProject) => {
            let {name, html_url} = newProject;
            newProject = {
              name,
              html_url
            };
            // TODO url się otwiera jako api :( może jeszcze raz doda setState?

            flag.setState({projects: newProjects});
          })
        })
        .catch(function(error) {
          flag.setState(
            { projects:
              [{name:'Sorry, there is a problem with loading data'}]
            }
          )
      })
    })
  }


  render() {
    return (
      <div className="App">
        <Search
          searchForUser={this.setUser}
          updateUser={this.newUser}
          handleKeyPress={this.searchOnEnter}
        />
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
