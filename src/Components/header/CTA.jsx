import React from 'react'
import CV from '../../images/Athulraj T Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download cv</a>
        <a href="#contact" className='btn btn-primary'>lets Talk</a>
    </div>
  )
}

export default CTA
