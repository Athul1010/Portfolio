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
          <p>In pursuit of professional advancement and continuous growth, I am seeking an environment that not
             only fosters my expertise in JavaScript and software program development but also provides a vast
              array of educational opportunities. My passion lies in exploring cutting-edge technologies and 
              pioneering novel ideas, making me an ideal fit for an organization that values innovation and embraces 
              forward-thinking approaches in the software development industry. I am eager to contribute my skills
               and thrive in a space where creativity and learning intersect, propelling both my career and the
                organization to new heights. </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>



    </section>

  )
}

export default About