import React from 'react'
import Blob from '../../components/Blob_image/index';
import Introduction from '../../components/introduction';
import './about.css'

const About = () => {
  return (
   <>
    <div className='about-section'>
   <h2 className='section-heading about-heading section-top-heading' data-aos="fade-up">About</h2>
   <div className="flex">
    <Blob/>
    <Introduction/>
   </div>
        
    </div>
   </>
  )
}

export default About;