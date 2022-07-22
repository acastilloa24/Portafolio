import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/rainyDays.jpg'
import IMG2 from '../../assets/childhoodMemories.jpg'
import IMG3 from '../../assets/almostThere.jpg'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
            {/* <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div> */}
            <h3>Techos y Paredes</h3>
            <div className="portfolio__item-cta">
              {/* <a href="https://gitlab.com" target="_blank" className="btn">Gitlab</a> */}
              <a href="https://www.techosyparedes.com.mx/" target="_blank" className='btn btn-primary'>Website</a>
            </div>
        </article>
        <article className='portfolio__item'>
            {/* <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
            </div> */}
            <h3>RecommendME</h3>
            <div className="portfolio__item-cta">
             {/*  <a href="https://gitlab.com" target="_blank" className="btn">Gitlab</a> */}
              <a href="https://recommendme-7d97a.web.app/#/login" target="_blank" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
            <h3>Apostillamiento y Legalización</h3>
            <div className="portfolio__item-cta">
              {/* <a href="https://gitlab.com" target="_blank" className="btn">Gitlab</a> */}
              <a   href="http://retys.nl.gob.mx/servicios/apostille-de-documentos" target="_blank" className='btn btn-primary'>Website</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio