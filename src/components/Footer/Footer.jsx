import React, { useEffect } from 'react'
// import { Button } from '@material-ui/core'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import './footer.css'
import { Button } from '@mui/material'
const Footer = () => {
  
  useEffect(()=>{
    Aos.init({duration:3000});
   },[])

  return (
    <footer>
      <div className='upperFooter'>
    <div className='footer_header'>
     
      <span className='left' data-aos="fade-up">Double Your Sales By Choosing </span>
      <br />
      <span className='up' data-aos="fade-left">Us For Grow Your </span>
      <br />
      <span className='down' data-aos="fade-right">Business Globally</span>
    </div>
    <div>
    <Button component={Link} to="/contact" variant="contained" disableElevation size="large" color="success" data-aos="fade-left">
    CONTACT
          </Button>
          </div>
      </div>
   <div className='lowerFooter'>
      <div className='lowerFooter1'>
        <div className='footerSide1'>
    <h1>FHS</h1>
    <div className='footer_text_container' data-aos="fade-up">
    Enjoy explosive growth with Online Marketing, live chat, and Instagram DM's. Exclusively for rapidly scaling Internet brands
    </div>
        </div>
        <div className='footerGrid'>
          <div className='footerGrid1'>
            <div>
              <h1>Company</h1>
              </div>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
           
          </div>
          <div className='footerGrid2'>
          <div>
              <h1>Services</h1>
              </div>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
          </div>
          <div className='footerGrid3'>
          <div>
              <h1>Solutions</h1>
              </div>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
              <a href="">Hello1</a>
          </div>
        </div>
      </div>
   </div>
    </footer>
  )
}

export default Footer