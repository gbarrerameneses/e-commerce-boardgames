import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <>
      <div>
        <ul>
          <li>Home</li>
          <li>BoardGames</li>
          <li>Contact</li>
          <li><CardWidget/></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar