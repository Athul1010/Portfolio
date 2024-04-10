import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './Technologies.css'

const Technologies = () => {
    return (
        <section id='Technology'>
            <h5>Skills</h5>
            <h2>Technologies</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front End Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div><h4>React JS</h4>
                                <small className='text-light'></small></div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div><h4>Javascipt</h4>
                                <small className='text-light'></small>
                            </div>

                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div> <h4>HTML</h4>
                                <small className='text-light'></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div> <h4>CSS</h4>
                                <small className='text-light'></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div> <h4>Bootstrap</h4>
                                <small className='text-light'></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div> <h4>Redux Toolkit</h4>
                                <small className='text-light'></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div> <h4>Ajax</h4>
                                <small className='text-light'></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div> <h4>RESTful API</h4>
                                <small className='text-light'></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div> <h4>Git</h4>
                                <small className='text-light'></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div> <h4>Wordpress</h4>
                                <small className='text-light'></small>
                            </div>
                        </article>
                    </div>

                </div>
                <div className="experience__backend">
                    <h3>Back End Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div> <h4>Node JS</h4>
                                <small className='text-light'></small>
                            </div></article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div><h4>Express JS</h4>
                                <small className='text-light'></small>

                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div><h4>MongoDB</h4>
                                <small className='text-light'></small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Technologies