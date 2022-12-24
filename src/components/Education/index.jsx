import React from 'react'
import Timeline from '../timeline';
import './education.css';

const EducationSection = () => {
   const EducationData =[
        {
            heading:"Bachelor of Computer Application",
            timespan:"2021 - 2023",
            title:"MJPRU, Bareilly, Uttar Pradesh",
        },
         {
            heading:"Senior Secondary, Science",
            timespan:"Year of Completion - 2021",
            title:"Kendriya Vidyalaya No.2 O.C.F Shahjahanpur, Uttar Pradesh",
        }, {
            heading:"Secondary",
           timespan:"Year of Completion - 2019",
            title:"Kendriya Vidyalaya No.2 O.C.F Shahjahanpur, Uttar Pradesh",
        }
    ];

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