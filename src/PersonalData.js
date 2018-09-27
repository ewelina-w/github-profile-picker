import React, { Component } from 'react';

class PersonalData extends Component {
  render () {
    const { profile, projects, openProject, hideProject } = this.props;
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
