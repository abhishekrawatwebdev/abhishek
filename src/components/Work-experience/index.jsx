import React from 'react'
import Timeline from '../timeline';
import './experience.css';

const WorkExperience = () => {
    const WorkExperienceDAta =[
        {
            heading:"Internship, Growpital",
            timespan:"September 2022 - present",
            title:"Frontend Developer",
        },
         {
            heading:"Internship, KGS Fintech Pvt. Ltd. (Capitall)",
            timespan:"January 2022 - March 2022",
            title:"Frontend Developer",
        }, {
            heading:"Internship, Marstech",
            timespan:"October 2021 - December 2021",
            title:"Frontend Developer",
        }
    ]
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