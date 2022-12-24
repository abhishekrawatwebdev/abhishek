import React, { useEffect } from 'react'
import './landing.css'
import Abhishek from '../../assets/Abhishek.png'
import developer from '../../assets/developer.png'

const Landing = () => {
    useEffect(()=>{
        
window.addEventListener('scroll', () => {
    const mountains = document.getElementsByClassName('back-mountains')[0];
    const name = document.getElementsByClassName('my-name')[0]
    const domain = document.getElementsByClassName('my-domain')[0]
    let value = window.scrollY;
    let nameTop = -19;
    let domainTop = -11;
    mountains.style.top= value * 0.1 + '%';
    name.style.top= nameTop + value * 0.3 + '%';
    domain.style.top= domainTop + value * 0.3 + '%';
    console.clear();
})
},[]);


  return (
    <>
    <div className='landing-section'>
        <div className="back-mountains">
        </div>
        <div className="front-man">
        </div>
        <div className="my-name" data-aos="flip-up" data-aos-duration="1100">
            <img src={Abhishek} alt="my name" />
        </div>
        <div className="my-domain" data-aos="flip-up" data-aos-duration="1100">
            <img src={developer} alt="my name" />
        </div>
    </div>
    
    </>
    
  )
}

export default Landing