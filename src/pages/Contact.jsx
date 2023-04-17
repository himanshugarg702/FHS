import React, { useState } from 'react';
import CommonSection from './Common-Section'
import ReactPlayer from 'react-player'
import ThankYouDialog from './ThankYouDialog';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Box, CardMedia, Grid, Typography,Link } from '@mui/material'
import '../styles/contact.css'
const Contact = () => {

  return (
    <>
    <CommonSection title="Contact"/>
    <Box>
      <Grid className='contact_heading'>
      <Typography variant="h4" >Give Us the opportunity and take the <span>impact.</span></Typography>
      </Grid>
      <Grid container>
        <Grid className='form_full'>
        <div class="container">
  <form>
    <label for="fname"> Name
    <span className='mando'> *</span></label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>

    <label for="email">Email
    <span className='mando'> *</span></label>
    <input type="text" id="email" name="Email" placeholder="Email" required />

    <label for="pnumber">Phone Number
    <span className='mando'> *</span></label>
    <input type="text" id="pnumber" name="phonenumber" placeholder="" required/>
    <label for="pnumber">What's your budget estimate?
    <span className='mando'> *</span>
    </label>
    <input type="text" id="pnumber" name="phonenumber" placeholder="" required/>
     <span className='checkbox_css'>
    <label for="pnumber" className='checkbox_head'>Here's why we are the ones to contact:</label><br/>
    <span className='checkbox_style'>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label for="probem" className="reason"> I want to validate my idea</label><br/>
    </span>
    <span className='checkbox_style'>
<input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
<label for="problem" className="reason">I want to build an MVP</label><br/>
</span>
<span className='checkbox_style'>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
<label for="problem" className="reason">I want to build a web platform</label><br/>
 </span>
 <span className='checkbox_style'>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
<label for="problem" className="reason">I want to build an app</label><br/>
</span>
<span className='checkbox_style'>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
<label for="problem" className="reason">I want hire quality assurance experts</label><br/>
</span>
<span className='checkbox_style'>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
<label for="problem" className="reason">I want to hire dedicated developers</label><br/>
 </span>
</span>

    <label for="subject">Message
    <span className='mando'> *</span></label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:100}} required></textarea>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
<label for="vehicle3" className="reason">Add me to your mailing list</label><br/>
    <input type="submit" value="Submit"/>
  </form>
  {/* <ThankYouDialog open={open} onClose={handleClose} /> */}
</div>
        </Grid>
        {/* <Grid className='border'>
          <div className='border_line1'>
            
          </div>
          <div className='border_line2'>
            OR
          </div>
          <div className='border_line3'>
            a
          </div>
        </Grid> */}
        {/* <Grid>
          <source src='https://calendly.com/follishitechsolutionsdb/30min'></source>
        <video width="400" controls>
  <source src="https://www.youtube.com/watch?v=FySWE2eezXU&ab_channel=Lofi10M" type="video/mp4"/>
  
  Your browser does not support HTML video.
</video>
        <Grid>
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <LocationOnIcon style={{ marginRight: '8px' }} />
      <Typography variant="body1">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32638.53290831027!2d76.71096514786436!3d30.698626790556265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedbb676f4581%3A0x75f75e10d5c9d892!2sFollis%20HiTech%20Solutions!5e0!3m2!1sen!2sin!4v1681450779530!5m2!1sen!2sin" style={{width:"800", height:"450", border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Typography>
    </div>
        </Grid>
        </Grid> */}


        <Grid>
             <div className='schedule_meeting'>
              <h2 style={{color:'black'}} className='meeting_head'>Schedule A Meeting</h2>
              <div className='paraMeeting'>If you interested, you can have a meeting scheduled 
                with our professionals at any point in time</div>
                  <div className='meeting_parent'>
                  <iframe className='meeting' src="https://calendly.com/follishitechsolutionsdb/" title="W3Schools Free Online Web Tutorials"></iframe> 
                  </div>
             </div>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Contact

























































// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Input from '@mui/material/Input';
// // import InputLabel from '@mui/material/InputLabel';
// // import InputAdornment from '@mui/material/InputAdornment';
// // import FormControl from '@mui/material/FormControl';
// // import TextField from '@mui/material/TextField';
// // import AccountCircle from '@mui/icons-material/AccountCircle';
// // import { Button, Grid, InputBase, Typography } from '@mui/material';
// // import '../styles/contact.css'

// // export default function Contact() {
// //   return (
// //     <Box>
     
// //   <Grid item xs={12} >
// //     <Typography variant="h4" className='services_heading'>Give us the opportunity and take the impact.</Typography>
// //   </Grid>
// //       <div className='contact_main'>
// //       <div class="container">
// //   <form action="">
// //     <label for="fname">First Name</label>
// //     <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

// //     <label for="lname">Last Name</label>
// //     <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

// //     <label for="phoneNo">Phone-Number</label>
// //     <input type="text" id="phoneNo" name="PhoneNo" placeholder="Phone Number"/>

// //     <label for="subject">Subject</label>
// //     <textarea id="subject" name="subject" placeholder="Write something.." style={{height:100}}></textarea>

// //     <input type="submit" value="Submit"/>
// //   </form>
// // </div>
// //         <div className='form_side'>

// //         </div>

// // </div>
// //     </Box>
// //   );
// // }
