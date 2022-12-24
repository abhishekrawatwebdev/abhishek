import React from 'react'
import Timeline from '../timeline';
import './experience.css';
import WorkExperienceDAta from '../../data/workingExperience';
const WorkExperience = () => {
  return (
    <div className='work-experience-section' data-aos="fade-up">
        <h2 className='timelines-heading'>Work Experience</h2>

        {
            WorkExperienceDAta.map((item)=>{
                return(
                    <Timeline  key={item.timespan}  heading={item.heading}
            timespan={item.timespan}
            title={item.title}/>
                )
            })
        }
    </div>
  )
}

export default WorkExperience;