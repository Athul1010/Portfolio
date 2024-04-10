import React from 'react';
import './App.css';
import About from './Components/about/about';
import Contact from './Components/contacts/contact';
import Footer from './Components/footer/footer';
import Header from './Components/header/header';
import Navbar from './Components/nav/navbar';
import Education from './Components/Education/education';
import Technologies from './Components/Technologies/Technologies';



function App() {
  return (


    <div className='portfolio-profile'>
      <Header />
      <Navbar />
      <About />
      <Education />
      <Technologies />
      <Contact />
      <Footer />
    </div>



  );
}

export default App;
