import React, { useEffect,useState } from 'react'
import CommonSection from './Common-Section'
import Aos from 'aos'
import 'aos/dist/aos.css'
import service1 from '../assets/images/service1.jpg'
import '../styles/WebApplicationDevelopment.css'
import img1 from '../assets/images/Aboutfirstimage.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Box, Button, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Sick } from '@mui/icons-material'
const WebApplicationDevelopment = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [count2, setCount2] = useState(0);
  useEffect(() => {
    let timer,timer2;
    if (count < 10) {
      timer = setTimeout(() => {
        setCount(count + 1);
      }, 20);
    }
    if (count2 < 100) {
      timer = setTimeout(() => {
        setCount2(count2 + 1);
      }, 20);
    }
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [count,count2]);

  return (
<>
      <CommonSection title="WEB APPLICATION DEVELOPMENT"/>
      <Grid container className='webDev'>
  <Grid item xs={12} className='webDevHead'>
    <Typography variant="h3" >Why Choose Us</Typography>
  </Grid>
  {/* <Box> */}
    <Card sx={{ maxWidth: 220 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
        <BusinessCenterIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>YEARS IN BUSSINESS</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 220 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
        <StarIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count2}<AddIcon/>
        </Typography>
        <Typography>CUSTOMER REVIEWS</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 220 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
       <PersonIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>CLIENTS WORLDWIDE</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 220 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
       <SupervisorAccountIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>CLIENTS WORLDWIDE</Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid container className='webDev2'>
  <Grid item xs={12} sm={6} className='padd' data-aos="fade-up">
    {/* <Typography variant="body1">Content goes here</Typography> */}
    {/* <img src={service1} alt="" /> */}
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
        <BusinessCenterIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>YEARS IN BUSSINESS</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
        <BusinessCenterIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>YEARS IN BUSSINESS</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
        <BusinessCenterIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>YEARS IN BUSSINESS</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
        <BusinessCenterIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>YEARS IN BUSSINESS</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
        <BusinessCenterIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>YEARS IN BUSSINESS</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
        <BusinessCenterIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>YEARS IN BUSSINESS</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
        <BusinessCenterIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>YEARS IN BUSSINESS</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
        <BusinessCenterIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>YEARS IN BUSSINESS</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography gutterBottom variant="h5" component="div">
        <BusinessCenterIcon/>
        </Typography>
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>YEARS IN BUSSINESS</Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} className='imageCon' style={{flexDirection:'column'}} data-aos="fade-left">
    <Typography variant="h3" data-aos="fade-up">Enhance User Experience With Professional Web Development Services!</Typography>
    <Typography variant='body1' className='image_para'>We are specialized in offering interactive, scalable, and robust web development services that boost your visitors and ROI. Whether you are looking forward to enhancing your existing website or want to architect an enterprise solution, we are up for all the challenges.

Get Started</Typography>
    <Button variant='contained' size='large'>Get Started</Button>
  </Grid>
</Grid> 
<Grid container>
<Grid item xs={12} sm={6} className='imageCon imageCon1' style={{flexDirection:'column'}} data-aos="fade-down">
    <Typography variant="h4">More content goes here</Typography>
    <Typography variant='body1' data-aos="fade-up">Leveraging the battle-tested Agile Frameworks like Scrum and Lean practices, we build and deliver high-performing solutions that bring real value to our clients’ businesses. Our large pool of highly experienced agile professionals and scrum masters follow iterative and sprint-based approaches to deliver market-ready software in a quick turnaround time. The resulting software is malleable,</Typography>
    <Button variant='outlined'>Hello</Button>
  </Grid>
  <Grid item xs={12} sm={6} data-aos="fade-up">
    {/* <Typography variant="body1">More content goes here</Typography> */}
    <img src={service1} alt="" />
  </Grid>
</Grid>

    </>
  )
}

export default WebApplicationDevelopment

// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   useEffect(() => {
//     let timer1, timer2;

//     if (count1 < 50) {
//       timer1 = setTimeout(() => {
//         setCount1(count1 + 1);
//       }, 20);
//     }
//     if (count2 < 100) {
//       timer2 = setTimeout(() => {
//         setCount2(count2 + 1);
//       }, 20);
//     }

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, [count1, count2]);

//   return (
//     <div className="App">
//       <h1>Count 1: {count1}</h1>
//       <h1>Count 2: {count2}</h1>
//     </div>
//   );
// }

// export default App;
