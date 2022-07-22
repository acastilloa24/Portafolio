import React from 'react'
import './work.css'
import {BiCheck} from 'react-icons/bi'

const Work = () => {
  return (
    <section id="work">
      <h5>Enterprises that I have worked with</h5>
      <h2>Work Experience</h2>
      <div className="container work__container">
        <article className="work">
          <div className="work__head">
            <h3>Elevation</h3>
          </div>
          <ul className='work__list'>
            <li>
              <BiCheck className='work__list-icon' />
              <p> Development of a CMS to manage and upload images, banners and products.</p>
            </li>
            <li>
              <BiCheck className='work__list-icon' />
              <p>Integration of VUE components to locate the stores in google maps and a search bar for the products.</p>
            </li>
          </ul>
        </article>
        <article className="work">
          <div className="work__head">
            <h3>Gobierno del Estado de Nuevo León</h3>
          </div>
          <ul className='work__list'>
            <li>
              <BiCheck className='work__list-icon' />
              <p>Developement of software to apostille and legalize official documents.</p>
            </li>
            <li>
              <BiCheck className='work__list-icon' />
              <p>Automation of intern tasks.</p>
            </li>
            <li>
              <BiCheck className='work__list-icon' />
              <p>Web view to convert files into databases.</p>
            </li>
            <li>
              <BiCheck className='work__list-icon' />
              <p>Mobile App demo to check the license plates and get data of a vehicle.</p>
            </li>
          </ul>
        </article>
        <article className="work">
          <div className="work__head">
            <h3>Gobae Consulting</h3>
          </div>
          <ul className='work__list'>
            <li>
              <BiCheck className='work__list-icon' />
              <p> Full Stack development on checkout process forms for a tuxedos rental online store.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Work