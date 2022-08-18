import { useState, useEffect } from 'react'
import './styles/App.css';

import Project from './components/Project'
import projectService from './services/projects'

const App = () => {
  const [projects, setProject] = useState([])

  useEffect(() => {
    projectService
      .getAll()
      .then(initialProjects => {
        setProject(initialProjects)
      })
  }, [])

  return (
    <div className='App'>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => 
          <Project
            key={project.id}
            project={project}
          />
        )}
      </ul>
    </div>
  )
}

export default App