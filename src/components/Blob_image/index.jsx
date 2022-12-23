import React from 'react';
import me from '../../assets/me.png'

import './blob.css'
const Blob = () => {
  return (
    <div className='blob-section' data-aos="fade-up" data-aos-duration="2000">
        <img src={me} alt="blob_image" className='blob-image' />
    </div>
  )
}
export default Blob;
