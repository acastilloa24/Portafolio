import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {GiPianoKeys} from 'react-icons/gi'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Developer Experience</h5>
              <small>7+ Years Working</small>
            </article>
            <article className="about__card">
              <GiPianoKeys className='about__icon'/>
              <h5>Producer Experience</h5>
              <small>4+ Years</small>
            </article>
          </div>

          <p>I'm a Fullstack Web Developer and Music Producer that likes to learn new stuff everyday. </p>
          <p>I have worked with different enterprises in so many ways around these years, like credit services, business intelligence
             areas, financial business, rental marketplaces, apostille and legalization services(Government NL, MX).
          </p>
          <p>Also I have my own personal projects as a developer and as a producer I dropped some EP's and an album as an independient artist.</p>
          <p>On my free time I like to run outside and clear my mind or just play some videogames with friends.</p>
          

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About