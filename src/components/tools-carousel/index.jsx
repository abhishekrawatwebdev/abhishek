import React from 'react'
import './tools.css'
import getTools from '../../data/tools';
const ToolsUsed = () => {
  return (
    <div className='tools-container' >
      <div className="tools-inner">
 {getTools.map((tool)=>{
             return(
                <div className="carousel-item" data-aos="fade-up" key={tool.toolName}>
                <img src={tool.toolImg} alt={tool.toolName} />
        </div>
             )
        })}
      </div>
       
       
       
    </div>
  )
}

export default ToolsUsed