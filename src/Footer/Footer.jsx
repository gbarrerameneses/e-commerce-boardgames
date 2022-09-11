import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer'>Footer
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/boardgames'}>BoardGames</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </div>
    </>
    
  )
}

export default Footer