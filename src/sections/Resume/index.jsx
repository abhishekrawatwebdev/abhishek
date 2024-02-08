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
        <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1HEuZG6NGx_4bjZh5dj1vlX5N3pB4fmK1/view?usp=drivesdk" className='viewCV-btn'>View CV</a>
      </div>
    </div>
  )
}

export default Resume;
