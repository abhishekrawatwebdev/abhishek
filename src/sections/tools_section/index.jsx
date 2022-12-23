import React from 'react'
import ToolsUsed from '../../components/tools-carousel'
import './tools-section.css'

const ToolsSection = () => {
  return (
    <div className='tools-section' >
      <div>
        <h2 className="section-heading tools-heading section-top-heading" data-aos="fade-up" >Tools</h2>
        <p className='tools-desc' data-aos="fade-up" >These are some of the applications that I  am familiar with and <br />
            used to manage the tasks and helped to establish the coordination <br />
           with my team
        </p>
      </div>
      <div data-font data-aos="fade-up">
        <ToolsUsed/>
      </div>
        
    </div>
  )
}

export default ToolsSection