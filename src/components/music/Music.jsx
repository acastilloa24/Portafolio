import React from 'react'
import './music.css'
import IMG1 from '../../assets/rainyDays.jpg'
import IMG2 from '../../assets/childhoodMemories.jpg'
import IMG3 from '../../assets/almostThere.jpg'
import {ImHeadphones} from 'react-icons/im'

const Music = () => {
  return (
    <section id="music">
      <h5>My Music Project</h5>
      <h2>Album & Ep</h2>

      <div className="container music__container">
        <article className='music__item'>
            <div className="music__item-image">
              <img src={IMG1} alt="" />
            </div> 
            <h3>Rainy Days</h3>
            <div className="music__item-cta">
              <a href="https://distrokid.com/hyperfollow/goldenbeast/rainy-days" target="_blank" className='btn btn-primary'>Play On <ImHeadphones /> </a>
            </div>
        </article>
        <article className='music__item'>
            <div className="music__item-image">
              <img src={IMG2} alt="" />
            </div> 
            <h3>Childhood Memories</h3>
            <div className="music__item-cta">
              <a href="https://distrokid.com/hyperfollow/goldenbeast/lf2h-vol-1" target="_blank" className='btn btn-primary'>Play On <ImHeadphones /></a>
            </div>
        </article>
        <article className='music__item'>
            <div className="music__item-image">
              <img src={IMG3} alt="" />
            </div> 
            <h3>Almost There</h3>
            <div className="music__item-cta">
              <a href="https://distrokid.com/hyperfollow/goldenbeast/almost-there" target="_blank" className='btn btn-primary'>Play On <ImHeadphones /></a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Music