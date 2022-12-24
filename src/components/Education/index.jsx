import React from 'react'
import Timeline from '../timeline';
import './education.css';
import EducationData from '../../data/EducationData';
const EducationSection = () => {
   

  return (
    <div className='education-section' data-aos="fade-up">
        <h2 className='timelines-heading'>Education</h2>
        {
            EducationData.map((item)=>{
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

export default EducationSection