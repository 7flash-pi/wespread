import React from 'react';

const About = ({src,info}) => {
  return (
    <div className='about-container'>
        <img src={src} alt="#" className='about-img' />
        <p className='about-info'>{info}</p>
    </div>
  )
}

export default About
