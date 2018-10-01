import React, { Component } from 'react';

class PersonalData extends Component {

  render () {
    const { profile, projects, openProject, hideProject, restoredProjects, restore } = this.props;
    return (
      <div className='profile-info'>
        <div className="profile-avatar" style={{
          backgroundImage: `url(${profile.avatarURL})`
        }}>
        </div>
        <div className='filter-info'>
          <input
            className='filter'
            type='text'
            placeholder='Search for info'
          />
          <div className='buttons'>
            <button>Open</button>
            <button>Hide</button>
            <button>Show</button>
          </div>
        </div>
        <div className='detailed-info'>
          <h3>Basic information</h3>
            <p>{profile.link}</p>
            <p>{profile.email}</p>
            <p>{profile.place}</p>
        </div>
        <div className='projects'>
          <h3>Projects</h3>
          {projects.length !== restoredProjects.length && (
            <div className='showingProjects'>
              <span>Now showing {projects.length} of {restoredProjects.length} total</span>
              <button onClick={() =>
                restore(projects, restoredProjects)} className='restoredButton'>
                Show all
              </button>
            </div>
          )}
          <ol className='list-of-projects'>
          {projects.map((project) => (
            <li key={project.name} className={ project.name }>
              <div className='project-name'>
                <input type='checkbox'/>
                <p>{project.name}</p>
                <button onClick={() =>
                  openProject(project)} className='showProject'>
                  Open
                </button>
                <button onClick={() =>
                  hideProject(project)} className='hideButton'>
                  Hide
                  </button>
              </div>
            </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default PersonalData;
