import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import CommonSection from './Common-Section'
import service1 from '../assets/images/service1.jpg'
import '../styles/services.css'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import { Grid, Typography } from '@material-ui/core';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';




const Services = () => {

  useEffect(()=>{
    Aos.init({duration:3000});
   },[])




  return (
<>
<CommonSection title="Services"/>
<Grid container >
  <Grid item xs={12} className='services_heading1' data-aos="fade-up">
    <Typography variant="h4" className='services_heading'>Our multidisciplinary team of experts offers a wide spectrum of peerless services using a process-driven methodology to deliver result-driven solutions.</Typography>
  </Grid>
  <Grid item xs={12} sm={6} className='padd' data-aos="fade-up">
    {/* <Typography variant="body1">Content goes here</Typography> */}
    <img src={service1} alt="" />
  </Grid>
  <Grid item xs={12} sm={6} className='imageCon' style={{flexDirection:'column'}} data-aos="fade-left">
    <Typography variant="h4" data-aos="fade-up">More content goes here</Typography>
    <Typography variant='body1' className='image_para'>Leveraging the battle-tested Agile Frameworks like Scrum and Lean practices, we build and deliver high-performing solutions that bring real value to our clients’ businesses. Our large pool of highly experienced agile professionals and scrum masters follow iterative and sprint-based approaches to deliver market-ready software in a quick turnaround time. The resulting software is malleable,</Typography>
    <Button variant='outlined'>Hello</Button>
  </Grid>
  <Grid item xs={12} sm={6} className='imageCon' style={{flexDirection:'column'}} data-aos="fade-down">
    <Typography variant="h4">More content goes here</Typography>
    <Typography variant='body1' className='image_para' data-aos="fade-up">Leveraging the battle-tested Agile Frameworks like Scrum and Lean practices, we build and deliver high-performing solutions that bring real value to our clients’ businesses. Our large pool of highly experienced agile professionals and scrum masters follow iterative and sprint-based approaches to deliver market-ready software in a quick turnaround time. The resulting software is malleable,</Typography>
    <Button variant='outlined'>Hello</Button>
  </Grid>
  <Grid item xs={12} sm={6} data-aos="fade-up">
    {/* <Typography variant="body1">More content goes here</Typography> */}
    <img src={service1} alt="" />
  </Grid>
  <Grid item xs={12} sm={6}>
    {/* <Typography variant="body1">Content goes here</Typography> */}
    <img src={service1} alt="" />
  </Grid>
  <Grid item xs={12} sm={6} className='imageCon' style={{flexDirection:'column'}} data-aos="fade-down">
    <Typography variant="h4" data-aos="fade-up">More content goes here</Typography>
    <Typography variant='body1' className='image_para'>Leveraging the battle-tested Agile Frameworks like Scrum and Lean practices, we build and deliver high-performing solutions that bring real value to our clients’ businesses. Our large pool of highly experienced agile professionals and scrum masters follow iterative and sprint-based approaches to deliver market-ready software in a quick turnaround time. The resulting software is malleable,</Typography>
    <Button variant='outlined'>Hello</Button>
  </Grid>
  <Grid item xs={12} className='photos_Footer' style={{flexDirection:'column'}} data-aos="fade-left">
    <Typography variant="h4"  className='photos_Footer_Header' data-aos="fade-up">Let's discuss your idea</Typography>
   <Button component={Link} to="/contact" variant="contained" disableElevation size="large" color="success">Contact</Button>
  </Grid>
  <Grid item xs={12} sm={6} className='imageCon' style={{flexDirection:'column'}} data-aos="fade-right">
    <Typography variant="h4" >More content goes here</Typography>
    <Typography variant='body1' className='image_para'>Leveraging the battle-tested Agile Frameworks like Scrum and Lean practices, we build and deliver high-performing solutions that bring real value to our clients’ businesses. Our large pool of highly experienced agile professionals and scrum masters follow iterative and sprint-based approaches to deliver market-ready software in a quick turnaround time. The resulting software is malleable,</Typography>
    <Button variant='outlined'>Hello</Button>
  </Grid>
  <Grid item xs={12} sm={6} data-aos="fade-left">
    {/* <Typography variant="body1">More content goes here</Typography> */}
    <img src={service1} alt="" />
  </Grid>
  <Grid item xs={12} sm={6} data-aos="fade-down">
    {/* <Typography variant="body1">Content goes here</Typography> */}
    <img src={service1} alt="" />
  </Grid>
  <Grid item xs={12} sm={6} className='imageCon' style={{flexDirection:'column'}} data-aos="fade-left">
    <Typography variant="h4" >More content goes here</Typography>
    <Typography variant='body1' className='image_para'>Leveraging the battle-tested Agile Frameworks like Scrum and Lean practices, we build and deliver high-performing solutions that bring real value to our clients’ businesses. Our large pool of highly experienced agile professionals and scrum masters follow iterative and sprint-based approaches to deliver market-ready software in a quick turnaround time. The resulting software is malleable,</Typography>
    <Button variant='outlined'>Hello</Button>
  </Grid>
  <Grid item xs={12} sm={6} className='imageCon' style={{flexDirection:'column'}} data-aos="fade-down">
    <Typography variant="h4" >More content goes here</Typography>
    <Typography variant='body1' className='image_para' data-aos="fade-up">Leveraging the battle-tested Agile Frameworks like Scrum and Lean practices, we build and deliver high-performing solutions that bring real value to our clients’ businesses. Our large pool of highly experienced agile professionals and scrum masters follow iterative and sprint-based approaches to deliver market-ready software in a quick turnaround time. The resulting software is malleable,</Typography>
    <Button variant='outlined'>Hello</Button>
  </Grid>
  <Grid item xs={12} sm={6} data-aos="fade-left">
    {/* <Typography variant="body1">Content goes here</Typography> */}
    <img src={service1} alt="" />
  </Grid>
</Grid>

    </>
  )
}

export default Services






































// import React from 'react'
// import CommonSection from './Common-Section'
// import service1 from '../assets/images/service1.jpg'
// import '../styles/services.css'
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

// const Services = () => {
//   return (
//     <div className='services'>
//       <CommonSection title="Services"/>
      
//         <section className='section1'>
//           <div>
//        <div className='section1_header'>
//         <div>
//         Services We Deliver
//         </div>
//         <div>
//        <h4> Our Featured Services</h4>
//         </div>
//        </div>
//        <div className='cards'>
//        <div className='card'>
//         <div className='card_icon'>
//           <BusinessCenterIcon/>
//         </div>
//         <div className='card_intro'>
//           <div className='card_intro__heading'>
//           Customized Software Development
//           </div>
//           <div className='card_details'>
//           You think and we will develop software as per your requirement only. Customized Software development is our specialisation.
//           </div>
//         </div>
//        </div>
//        <div className='card'>
//         <div className='card_icon'>
//           <BusinessCenterIcon/>
//         </div>
//         <div className='card_intro'>
//           <div className='card_intro__heading'>
//           Digital Marketing
//           </div>
//           <div className='card_details'>
//           Increasing your business in terms of Sales, Brand value, Revenue, Leads, Social media presence, Followers, Likes, Views, etc. is our target.
//           </div>
//         </div>
//        </div>
//        <div className='card'>
//         <div className='card_icon'>
//           <BusinessCenterIcon color='white'/>
//         </div>
//         <div className='card_intro'>
//           <div className='card_intro__heading'>
//          Industrial Training
//           </div>
//           <div className='card_details'>
//           We provide Industrial Training to the students of B. Tech (IT, CSE), MCA, MBA, Msc. IT, & other computer engg. students with 100% assistance in placements.
//           </div>
//         </div>
//        </div>
//        <div className='card'>
//         <div className='card_icon'>
//           <BusinessCenterIcon/>
//         </div>
//         <div className='card_intro'>
//           <div className='card_intro__heading'>
//         Website Designing
//                </div>
//           <div className='card_details'>
//           Till today we had already developed more than 10,000's of websites. We believe that website should not only fashionable but profitable also.
//           </div>
//         </div>
//        </div>
//        </div>
//        <div className='Discover'>
//          <div className='discover_Image'>
//           <img src={service1} alt='image for service'/>
//          </div>
         
//          <div className='discover_about'>
//          <div className='section1_header'>
//         <div>
//         Discover Our Company
//         </div>
//         <div>
//        <h5> Welcome To Follis Technologies Pvt. Ltd</h5>
//         </div>
//        </div>
//        <div className='card_details'>
//           You think and we will develop software as per your requirement only. Customized Software development is our specialisation.
//           </div>
//           <div className='card'>
//         <div className='card_icon'>
//           <BusinessCenterIcon/>
//         </div>
//         <div className='card_intro'>
//           <div className='card_intro__heading'>
//           Since 2007
//                </div>
//           <div className='card_details'>
//           JSR Technologies Pvt. Ltd. serving since 2007. Providing various IT services to client all around the globe.          </div>
//         </div>
//        </div>
//        <div className='card'>
//         <div className='card_icon'>
//           <BusinessCenterIcon/>
//         </div>
//         <div className='card_intro'>
//           <div className='card_intro__heading'>
//           Export
//                </div>
//           <div className='card_details'>
//           We are exporting IT services to various countries from years like USA, UK, Canada, Australia, Germany, France and many more.
//           </div>
//         </div>
//        </div>
//          </div>
//        </div>
//        </div>
//         </section>

      
      
//       </div>
//   )
// }

// export default Services