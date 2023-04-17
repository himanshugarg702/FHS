import React, { useEffect,useState } from 'react'
import '../styles/GoToTop.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const GoToTop = () => {
const [isVisible, setIsVisible] = useState(false)
    const gotoBtn=()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
const listenToScroll=()=>{
    let heightToHidden=250;
    const winScroll=document.body.scrollTop || document.documentElement.scrollTop;
     if(winScroll>heightToHidden){
          setIsVisible(true)
     }
     else{
        setIsVisible(false);
     }
}
    useEffect(()=>{
        window.addEventListener('scroll',listenToScroll);
    },[])


  return (
   <section>
    {isVisible && 
     <div className='top-btn' onClick={gotoBtn}> <ArrowUpwardIcon className='Arrow'/></div>
   
   }
     </section>
  )
}

export default GoToTop