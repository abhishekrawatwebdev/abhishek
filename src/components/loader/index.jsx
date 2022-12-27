import React, { useEffect, useRef } from 'react'
import './loader.css'
import Hello from '../../assets/Hello.mp4'
const Loader = () => {
    const vidref = useRef();
    useEffect(()=>{
        vidref.current.play();
    },[])
  return (
    <div className='loader'>
        <video src={Hello} className="greet" ref={vidref} autoPlay loop muted></video>
    </div>
  )
}

export default Loader;