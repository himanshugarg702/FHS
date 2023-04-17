import React, { useEffect, useState } from 'react'
import CommonSection from './Common-Section'
import '../styles/portfolio.css'
import services from '../assets/images/services.jpg'
import { Button, Card, CardContent, Pagination, Typography } from '@mui/material'
import { AddIcCallOutlined } from '@mui/icons-material'
import portfolioImage from '../assets/images/portfolioimage.png'
import AddIcon from '@mui/icons-material/Add';
const Portfolio = () => {
  
  
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  useEffect(() => {
    let timer,timer2,timer3,timer4;
    if (count < 10) {
      timer = setTimeout(() => {
        setCount(count + 1);
      }, 10);
    }
    if (count2 < 800) {
      timer2 = setTimeout(() => {
        setCount2(count2 + 40);
      }, 10);
    }
    if (count3 < 100) {
      timer3 = setTimeout(() => {
        setCount3(count3 + 2);
      }, 10);
    }
    if (count4 < 50) {
      timer4 = setTimeout(() => {
        setCount4(count4 + 1);
      }, 10);
    }
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [count,count2,count3,count4]);


  return (
    <>
    <div className='portfolio'>
     <div className='portfolio_left'>
  <div className='portfolio_heading'>
  <h1>Portfolio</h1>
  </div>
  <div className='portfolio_content'>
  Our work shows our ability. We entitle your business with advanced tools and technologies to offer cutting-edge solutions.
  </div>
  <div className='portfolio_cards'>
      {/* <div> */}
      <Card sx={{ maxWidth: 200 }} className='cardContent'>
      <CardContent className='card_main_content'>
       
        <Typography variant="h3" color="primary">
             {count}<AddIcon/>
        </Typography>
        <Typography>YEARS IN BUSSINESS</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
       
        <Typography variant="h3" color="primary">
        {count2}<AddIcon/>
        </Typography>
        <Typography>PROJECTS DELIVERED</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
       
        <Typography variant="h3" color="primary">
        {count3}<AddIcon/>
        </Typography>
        <Typography>CLIENTS WORLDWIDE</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 190 }} className='cardContent'>
      <CardContent className='card_main_content'>
        <Typography variant="h3" color="primary">
        {count4}<AddIcon/>
        </Typography>
        <Typography>EMPLOYEES</Typography>
      </CardContent>
    </Card>
      {/* </div> */}
  </div>
     </div>
     <div className='portfolio_right'>
<div className='portfolio_right_image'>
<img src={services} alt="" />
</div>
     </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                            </Button>
                   </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                            </Button>
                   </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                            </Button>
                   </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                            </Button>
                   </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                            </Button>
                   </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                            </Button>
                   </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                            </Button>
                   </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                            </Button>
                   </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                            </Button>
                   </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                    </Button>
                  </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                    </Button>
                  </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                    </Button>
                  </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                    </Button>
                  </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                    </Button>
                  </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                    </Button>
                  </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                    </Button>
                  </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                    </Button>
                  </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                    </Button>
                  </div>
          </div>
        </div>
    </div>
    <div className='portfolio_items'>
        <div className='portfolio_background_image'>
        </div>
        <div className='portfolio_item_detail'>
          <div className='portfolio_item_image'>
            <img src={portfolioImage} alt="" />
          </div>
          <div className='portfolio_item_content'>
                   <div className='portfolio_item_heading'>
                    <h1>MYSONG2U</h1>
                   </div>
                   <div className='portfolio_item_para'>
                   MySong2U is a #1 Platform to hire singers to deliver live on-demand performances.
                   </div>
                   <div className='portfolio_item_button'>
                   <Button variant="contained" disableElevation>
                         Wants to know more
                    </Button>
                  </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio