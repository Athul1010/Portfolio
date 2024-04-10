import React from 'react';
import './App.css';
import About from './Components/about/about';
import Contact from './Components/contacts/contact';
import Experience from './Components/experience/experience';
import Footer from './Components/footer/footer';
import Header from './Components/header/header';
import Navbar from './Components/nav/navbar';
import Education from './Components/Education/education';



function App() {
  return (
  
     
     <div className='portfolio-profile'>
       <Header/>
       <Navbar/>
       <About/>
       <Education/>
       <Experience/>
       <Contact/>
       <Footer/>
     </div>
     
     
    
  );
}

export default App;
