import React from 'react'
import './footer.css'
import Abhishek from '../../assets/Abhishek.png'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'
const Footer = () => {
  return (
    <>
    <h2 className='text-center reach'data-aos="fade-up" >Reach Out to Me</h2>
      <div className='footer'>
        
       <div data-aos="fade-up">
         
        <img className='footer-img-text' src={Abhishek} alt="Abhishek rawat" />
        <div className="footer-social-icons">
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
        <div className="footer-mail">
            <a href="mailto:abhishekrawatdingding@gmail.com"><h4>abhishekrawatdingding@gmail.com</h4></a>
            
        </div>
       </div>
       <div>
        <div id="map" data-aos="fade-up">
            <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112841.01642269445!2d79.90806480000003!3d27.8933255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1671755676924!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
       </div>

    </div>
    <p style={{color:'white',textAlign:'center',margin:'40px 0'}}>
        Designed, Built by Abhishek Rawat <br />
           With &#9749; in Shahjahanpur
    </p>
    </>
  
  )
}

export default Footer