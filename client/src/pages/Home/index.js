import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Project from './Project'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import Sidebar from './Sidebar'

import { useSelector } from 'react-redux'


function Home() {
  const {portfolioData} = useSelector((state) => state.root);
  return (
    <div>
   
   <Header/>
   {portfolioData && (
     <div className=' bg-primary px-40 py-10  sm:px-5 '>
     <Intro />
     <About/>
     <Experiences/> 
     <Project />
     <Courses />
     <Contact />
     <Footer/>
     <Sidebar />
 
     </div>
    
   )}
  
 
    </div>
  )
}

export default Home
