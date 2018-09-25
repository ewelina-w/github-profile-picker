import React, { Component } from 'react';

class PersonalData extends Component {
  render () {
    const { profile, openProject } = this.props;
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
            <p>{profile.location}</p>
        </div>
        <div className='projects'>
          <h3>Projects</h3>
          <ol className='list-of-projects'>
          {profile.projects.map((project) => (
            <li key={profile.projects.id} className='projects-list-item'>
              <div className='project-name'>
                <input type='checkbox'/>
                <p>{project.nazwa}</p>
                <button onClick={() =>
                  openProject(project)} className='showProject'>
                  Open
                </button>
                <button>Hide</button>
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
