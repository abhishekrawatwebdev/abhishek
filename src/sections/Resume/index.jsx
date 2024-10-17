import React from 'react'
import EducationSection from '../../components/Education';
import WorkExperience from '../../components/Work-experience';
import './resume.css'
const Resume = () => {
  return (
    <div className='resume-section'>
      <h2 className="text-center section-top-heading section-heading" data-aos="fade-up">Resume</h2>
      <div className="work-education">
        <WorkExperience/>
        <EducationSection/>
      </div>
      <div className="flex">
        <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1y8-eotCWkGjLGat6Dhfle9Cl4NUIPzeq/view?usp=sharing" className='viewCV-btn'>View CV</a>
      </div>
    </div>
  )
}

export default Resume;
