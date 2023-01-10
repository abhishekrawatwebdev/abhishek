import React from 'react'
import Technologies from '../../components/technology-carousel';
import './tech-section.css'

const TechSection = () => {
  return (
    <div className='tech-section'>
      <div>
        <h2 className="section-heading techs-heading section-top-heading" data-aos="fade-up" >Techs</h2>
        <p className='tech-desc'  data-aos="fade-up" >These are the  technologies that I  use to develop scalable <br />
frontend applications which are easy to maintain.
        </p>
      </div>
      <Technologies/>
    </div>
  )
}

export default TechSection;