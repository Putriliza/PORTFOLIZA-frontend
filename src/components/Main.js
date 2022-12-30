import React from 'react';
import { useState, useEffect } from 'react'
import service from '../services/service'
import Home from './home/Home';
import Experiences from './list/Experiences';
import Achievements from './list/Achievements';
import Projects from './list/Projects';

const Main = () => {
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
    <main className='container'>
      <Home />
      <Projects projects={projects}/>
      <Experiences experiences={experiences} />
      <Achievements achievements={achievements}/>
    </main>
  )
}

export default Main