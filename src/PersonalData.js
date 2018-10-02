import React, { Component } from 'react';
import sortBy from 'sort-by';
import escapeRegExp from 'escape-string-regexp'

class PersonalData extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  render () {
    const { profile, projects, openProject, hideProject, restoredProjects, restore } = this.props;
    const { query } = this.state
    let selectedProjects
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      selectedProjects = projects.filter((project) => match.test(project.name))
    } else {
      selectedProjects = projects
    }
    projects.sort(sortBy('updated_at')).reverse()

    return (
      <div className="profile-info">
        <div className="firstBox">
          <div className="profile-avatar" style={{
            backgroundImage: `url(${profile.avatarURL})`
          }}>
          </div>
          <div className="detailed-info">
            <h3>Basic information</h3>
            {profile.login && (
              <p>Login: {profile.login}</p>
            )}
            {profile.link && (
              <p>Link: {profile.link}</p>
            )}
            {profile.email && (
              <p>Email: {profile.email}</p>
            )}
            {profile.place && (
              <p>City: {profile.place}</p>
            )}
          </div>
        </div>
        <div className="secondBox">
          <div className="filter-info">
            <div>
              <input
                className="filter"
                type="text"
                placeholder="Search for project"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
            <div className="buttons">
              <button
                onClick={() =>
                {selectedProjects.map((project) =>
                  openProject(project)
                )}}
                className="open">
              Open
              </button>
              <button onClick={() =>
                {selectedProjects.map((project) =>
                  hideProject(project)
                )}}
                className="hide">
              Hide
              </button>
              <button
                onClick={() => (
                  this.clearQuery(), restore(projects, restoredProjects)
                )}
                className="show"
              >
              Show all
              </button>
            </div>
          </div>
          <div className="projects">
            <h3>Projects</h3>
            {selectedProjects.length !== restoredProjects.length && (
              <div className="showingProjects">
                <span>Now showing {selectedProjects.length} of {restoredProjects.length} total</span>
                <button onClick={() => (
                  restore(projects, restoredProjects),
                  query !== '' && this.clearQuery()
                  )}
                  className="restoredButton">
                  Show all
                </button>
              </div>
            )}
            <ol className="list-of-projects">
            {selectedProjects.map((project) => (
              <li key={project.name} className={ project.name }>
                <div className="project-name">
                  <p>{project.name}</p>
                  <button onClick={() =>
                    openProject(project)} className="showProject">
                    Open
                  </button>
                  <button onClick={() =>
                    hideProject(project)} className="hideButton">
                    Hide
                    </button>
                </div>
              </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalData;
