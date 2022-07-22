import React from 'react'
import './footer.css'
import {FaFacebookF, FaYoutube} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className='footer__logo'>Alejandro</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials"> 
          <a href="https://www.facebook.com/goldenbeastmusic/" target="_blank"><FaFacebookF /></a>
          <a href="https://www.instagram.com/goldenbeastmusic/" target="_blank"><FiInstagram /></a>
          <a href="https://www.youtube.com/channel/UCqRoJDDuGrQKIscKg9CanTA" target="_blank"><FaYoutube /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Alejandro Castillo. All rights reserved.</small>
        </div>
      </footer>
    </div>
  )
}

export default Footer