import React from 'react'
import { ProjectData } from './ProjectsData'
const Projects = () => {
  return (
    <div className='dark:bg-black bg-white h-fit w-screen'>
        <h2 className='dark:text-white text-black  text-center pt-10 text-5xl'>Projects</h2>
        <ProjectData/>
    </div>
  )
}

export default Projects