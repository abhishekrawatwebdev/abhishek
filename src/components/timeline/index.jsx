import React from 'react'
import './timeline.css'
const Timeline = (props) => {
  return (
    <div className='timeline-container'>
        <div className="timeline">
            <h3 className="timeline-heading">{props.heading}</h3>
            <div className="timeline-description">
                <p className='timeline-timespan'>{props.timespan}</p>
                <p className="timeline-title">{props.title}</p>
            </div>
        </div>
    </div>
  )
}

export default Timeline