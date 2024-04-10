import React from 'react'
import './header.css'
import CTA from './CTA'

import athulraj from '../../images/Athulraj.png'
import Headersocial from './headersocial'
const Header = () => {
  return (
<header id='hed'>
    <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>ATHULRAJ T</h1>
        <h5 className='text-light'>Entry-Level Frontend Developer (MERN Stack)</h5>
        <CTA/>
        <Headersocial/>
        <div className='me'>
          <img src={athulraj} alt="Me"/>
        </div>
        <a href="#contact" className='scroll__down'>scroll </a>
    </div>
</header>
  )
}

export default Header