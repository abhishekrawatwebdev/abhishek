import React, { useEffect } from 'react'
import './landing.css'

const Landing = () => {
    const scrollingEffect=()=>{
    const mountains = document.getElementsByClassName('back-mountains')[0];
    const name = document.getElementsByClassName('my-name')[0]
    const domain = document.getElementsByClassName('my-domain')[0]
    let value = window.scrollY;
    let nameTop = -19;
    let domainTop = -11;
    mountains.style.top= value * 0.1 + '%';
    name.style.top= nameTop + value * 0.3 + '%';
    domain.style.top= domainTop + value * 0.3 + '%';
    }
    useEffect(()=>{
        document.addEventListener('scroll', scrollingEffect,{passive: true});

    },[]);


  return (
    <>
    <div className='landing-section'>
        <div className="back-mountains">
        </div>
        <div className="front-man">
        </div>
        <div className="my-name" data-aos="flip-up" data-aos-duration="1100">
            <p className="landing-name">Abhishek Rawat</p>
        </div>
        <div className="my-domain" data-aos="flip-up" data-aos-duration="1100">
            <p className="landing-domain">Frontend Developer</p>
        </div>
    </div>
    
    </>
    
  )
}

export default Landing