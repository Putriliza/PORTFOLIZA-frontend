import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

import Projects from './components/list/Projects'
import Achievements from './components/list/Achievements'
import Experiences from './components/list/Experiences'

import service from './services/service'

import { Navbar, Nav } from 'react-bootstrap'



const Home = () => (
  <div> <h2>HALOWWWW</h2> </div>
)

const App = () => {
  const [projects, setProject] = useState([])
  const [experiences, setExperience] = useState([])
  const [achievements, setAchievement] = useState([])
  useEffect(() => {
    service
      .getAll('/api/projects')
      .then(initialProjects => {
        setProject(initialProjects)
      })
    service
      .getAll('/api/experiences')
      .then(initialExperiences => {
        setExperience(initialExperiences)
      })
    service
      .getAll('/api/achievements')
      .then(initialAchievements => {
        setAchievement(initialAchievements)
      })
  }, [])

  return (
    <div className='container'>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" as="span">
                <Link to="/">home</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link to="/projects">projects</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link to="/experiences">experiences</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link to="/achievements">achievements</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/experiences" element={<Experiences experiences={experiences} />} />
          <Route path="/achievements" element={<Achievements achievements={achievements} />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <div>
          <i>Portfoliza, miaw miaw, 2022</i>
        </div>
      </Router>
    </div>

  )
}

export default App