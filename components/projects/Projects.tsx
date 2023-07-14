import React from 'react'
import SectionHeader from '../section_header/SectionHeader'
import ProjectList from './project_list/ProjectList'

const Projects = () => {
  return (
    <section className='w-full my-2'>
      <SectionHeader title='projects'/>
      <ProjectList/>
    </section>
  )
}

export default Projects