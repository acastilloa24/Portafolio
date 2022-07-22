import React from 'react'
import CTA from './CTA'
import ME from '../../assets/profile_picture.jpg'
import HeaderSocials from './HeaderSocials'
import './header.css'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alejandro Castillo</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="">
          <img src={ME}  className='me'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header