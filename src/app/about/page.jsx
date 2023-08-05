import React from 'react'
import Image from 'next/image'
import './about.css'
import MI from 'public/profile.jpeg'

import Button from '@/components/button/Button'
import {FaAward} from 'react-icons/fa'
import {FaBriefcase} from 'react-icons/fa'
import {BiSupport} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">

         <div className="about__me">
         <div className="home__img">
                </div>
         </div>
        

        <div className="about__content">
             <div className="about__cards">
              <article className='about__card'>
               <FaAward className='about__icon'/>
               <h5>Experience</h5>
               <small>Still a freshmen</small>
              </article>
              <article className='about__card'>
               <FaBriefcase className='about__icon'/>
               <h5>Completed</h5>
               <small>15+ Projects</small>
              </article>
              <article className='about__card'>
               <BiSupport className='about__icon'/>
               <h5>Support</h5>
               <small>Online 24/7</small>
              </article>
             </div>
                 <div className="about__p">
                 <p>
             I am a Computer Science and Engineering pre-final year student at NIT Sikkim, passionate about technology.
              My skill set includes proficiency in Data Structures and Algorithms, web development using the MERN stack, UI/UX design, 
              and backend development with Spring Boot. Currently seeking internship opportunities in Software and Web Development.
             </p>
                 </div>
            
             <Button url="/contact" text="Let's Talk"/>
        </div>
      </div>
    </section>
  )
}

export default About;
