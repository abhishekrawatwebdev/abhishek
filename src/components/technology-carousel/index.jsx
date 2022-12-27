import React from 'react'
import getTechs from '../../data/techs'

const Technologies = () => {
  return (
    <div className='tech-section'>
      <div className="tools-inner">
 {getTechs.map((tech)=>{
             return(
                <div className="carousel-item" data-aos="fade-up" key={tech.techName}>
                <img src={tech.techImg} alt={tech.techName} />
        </div>
             )
        })}
      </div>
      <p style={{color:'white',display:'block',textAlign:'center',marginTop:'30px'}} data-aos="fade-up">And other CSS and animation Libraries</p>
    </div>
  )
}

export default Technologies;