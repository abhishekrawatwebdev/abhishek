import React, { useEffect } from 'react'
import Navbar from '../../components/navbar';
import './landing.css';
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'

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
    if(value>200){
        document.getElementsByClassName('navbar')[0].style.backgroundColor="var(--dark-green)"
    }
    else{
        document.getElementsByClassName('navbar')[0].style.backgroundColor="transparent"
    }
    }
    useEffect(()=>{
        document.addEventListener('scroll', scrollingEffect,{passive: true});

    },[]);


  return (
    <>
    <div className='landing-section'>
        <Navbar/>
        <div className="landing-mail">
            <a href="mailto:abhishekrawatdingding@gmail.com"><p>abhishekrawatdingding@gmail.com</p></a>
        </div>
         <div className="footer-social-icons landing-icons">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/abhishek-rawat-76b815219/">
                    <img src={linkedin} alt="linkedin" />
                </a>
            </div>
            <div className="social-icon">
                <a href="https://www.instagram.com/abhishekrawat_ding_ding/">
                    <img src={instagram} alt="instagram" />
                </a>
            </div>
            <div className="social-icon">
                <a href="https://github.com/abhishekrawatwebdev">
                    <img src={github} alt="github" />
                </a>
            </div>
        </div>
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