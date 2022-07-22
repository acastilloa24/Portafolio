import React from 'react'
import {BsLinkedin, BsInstagram, BsSpotify} from 'react-icons/bs'
import {AiFillGitlab} from 'react-icons/ai'
import {FaYoutube} from 'react-icons/fa'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/omar-alejandro-castillo-andrade-5181a354/" target="_blank"><BsLinkedin /></a>
        <a href="https://gitlab.com/acastilloa24" target="_blank"><AiFillGitlab /></a>
        <a href="https://www.instagram.com/goldenbeastmusic/" target="_blank"><BsInstagram /></a>
        <a href="https://www.instagram.com/goldenbeastmusic/" target="_blank"><FaYoutube /></a>
    </div>
  )
}
 
export default HeaderSocials