import { useState, useEffect } from 'react'
import './styles/App.css';

import Projects from './components/list/Projects'
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
      <Projects projects={projects} />
    </div>
  )
}

export default App