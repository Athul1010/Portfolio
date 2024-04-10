import React from 'react'
import './header.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
const Headersocial = () => {
  return (
    <div className='header__socials'>
    <a className='icons' href="https://www.linkedin.com/in/athulraj-t/" target="_blank"><BsLinkedin/></a>
    <a className='icons' href="https://github.com/Athul1010?tab=repositories" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default Headersocial