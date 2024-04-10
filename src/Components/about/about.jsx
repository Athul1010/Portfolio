import React from 'react'
import './about.css'
import Me from '../../images/About.png'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 year and 5 months</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>7+ completed</small>
            </article>


          </div>
          <div className='about-details'>
            <p>I am Athulraj T, a Mechanical Engineering graduate with a newfound passion for software development. Throughout my journey at Government Engineering College Wayanad, I honed my skills in problem-solving and analytical thinking. After completing my degree, I embarked on a transformative training in MERN Stack at Jspiders, Bangalore, fueling my enthusiasm for coding and development .</p>
            <p className='second-paragraph'>During my tenure as a Frontend Developer at Weamse Business Solutions, I immersed myself in various projects, both internal and external, refining my ability to craft intuitive user interfaces that seamlessly blend form with function. Now, driven by a relentless curiosity, I am dedicated to broadening my expertise in backend technologies, eager to contribute my skills to innovative projects in the software development domain .</p>
          </div>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>



    </section>

  )
}

export default About