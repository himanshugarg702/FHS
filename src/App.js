import React from 'react'
import Routers from './routes/Routers'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import About from './pages/About'
// import UpperHeader from 
import './App.css'
const App = () => {
  return (
    <>
    {/* <Bot/> */}
    <Header/>
    <Routers/>
    <Footer/>
    </>
  )
}

export default App