import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

import Projects from './components/list/Projects'
import projectService from './services/projects'

import { Navbar, Nav } from 'react-bootstrap'



const Home = () => (
  <div> <h2>HALOWWWW</h2> </div>
)

const Achievement = () => (
  <div> <h2>MEONG MEONG</h2> </div>
)

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
                <Link to="/achievements">achievements</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/achievements" element={<Achievement />} />
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