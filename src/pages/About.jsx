import React from 'react'
import image1 from '../assets/images/Aboutfirstimage.jpg'
import './about.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='home1'>
       <div className='homeContainer'>
        <div className='introHome'>
          <div className='homePage_header'>
            <span>Get Explosive</span>
            <span> Growth in </span>
            <span> Business With</span> 
            <br />
           
            <span>Follis Hitech Solution</span>
          </div>
        <div className='buttonHome1'>
        <Button component={Link} to='/contact' variant="contained" disableElevation size="large" color="success">
    CONTACT
          </Button>
          <Button component={Link} to='/services' disableElevation >
    Services
          </Button>
        </div>
        </div>
       <div className='imgContainer'>
    <img src={image1} alt="" />
</div>
       </div>
         <div className='home2'>
    <h1>Make online business more engaging </h1>
    <p>Watch how you can double your repeat 
      revenue with the most personalised engagement 
      channel!</p>
         </div>
       
    </div>
  )
}

export default About
