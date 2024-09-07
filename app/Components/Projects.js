import React from 'react'
import { ProjectData } from './ProjectsData'
const Projects = () => {
  return (
    <div className='bg-black h-screen w-screen'>
        <h2 className='text-white text-center pt-10 text-5xl'>Projects</h2>
        <ProjectData/>
    </div>
  )
}

export default Projects