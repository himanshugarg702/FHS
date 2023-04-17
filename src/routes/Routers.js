import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Services from '../pages/Services'
import CustomSoftwareDevelopment from '../pages/CustomSoftwareDevelopment'
import WebApplicationDevelopment from '../pages/WebApplicationDevelopment'
import BusinessRetail from '../pages/Solutions/BusinessRetail'
import E_CommerceShopping from '../pages/Solutions/E_CommerceShopping'
import Education from '../pages/Solutions/Education_Organizations'
import News_Entertainment from '../pages/Solutions/News_Entertainment'
import Industrial_Manufacturing from '../pages/Solutions/Industrial_Manufacturing'
import SocialMedia from '../pages/Solutions/SocialMedia'
import Sports_Leisure from '../pages/Solutions/Sports_Leisure'
import Travel_Tourism from '../pages/Solutions/Travel_Tourism'
import Careers from '../pages/Company/Careers'
import News from '../pages/Company/News'
import Partnership from '../pages/Company/Partnership'
import GoToTop from '../pages/GoToTop'

const Routers = () => {
  return (       
    <>
   
    <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
      <Route path='/services/CustomSoftwareDevelopment' element={<CustomSoftwareDevelopment/>}/>
        <Route path='/services/WebApplicationDevelopment' element={<WebApplicationDevelopment/>}/>
     <Route path='/solutions/BusinessRetail' element={<BusinessRetail/>}/>
     <Route path='/solutions/ECommerceShopping' element={<E_CommerceShopping/>}/>
     <Route path='/solutions/Education' element={<Education/>}/>
     <Route path='/solutions/NewsEntertainment' element={<News_Entertainment/>}/>
     <Route path='/solutions/IndustrialManufacturing' element={<Industrial_Manufacturing/>}/>
     <Route path='/solutions/SocialMedia' element={<SocialMedia/>}/>
     <Route path='/solutions/SportsLeisure' element={<Sports_Leisure/>}/>
     <Route path='/solutions/TravelTourism' element={<Travel_Tourism/>}/>
     <Route path='/company/careers' element={<Careers/>}/>
     <Route path='/company/news' element={<News/>}/>
     <Route path='/company/partnership' element={<Partnership/>}/>
    </Routes>
    <GoToTop/>
    </>
  )
}

export default Routers