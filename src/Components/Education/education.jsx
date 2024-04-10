import React from 'react'
import './education.css'
import { IoMdSchool } from 'react-icons/io'
import { FaSchool } from 'react-icons/fa'
const Education = () => {
  return (
    <section id='education-status'>
      <h5>Education</h5>
      <h2>Education Highlights</h2>
      <div className="container education__container">
        <article className="education">
          <div className="education__head">
            <div className='edlevel'>
              <IoMdSchool />
              <h3> B Tech</h3>
            </div>


            <p > <small><FaSchool /></small> Government Engineering College Wayanad</p>

            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>University :</small>KTU</p>
            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>CGPA/%:</small>7.04</p>
          </div>
        </article>
        <article className="education">
          <div className="education__head">
            <div className='edlevel'>
              <IoMdSchool /> 
              <h3>+2</h3>
            </div>


            <p > <small><FaSchool /></small> GVHSS Neruvambram</p>
            
            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>Board :</small>VHSE</p>
            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>CGPA/%:</small>75</p>
          </div>
        </article>
        <article className="education">
          <div className="education__head">
            <div className='edlevel'>
              <IoMdSchool />
              <h3>10 <sup>th</sup></h3>
            </div>


            <p ><small><FaSchool /></small> GHSS Morazha</p>
            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>Board:</small>SSLC</p>
            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>CGPA / %:</small>82</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Education