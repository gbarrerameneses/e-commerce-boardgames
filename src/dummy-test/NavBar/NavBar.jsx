import React from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><Link to={'/boardgames'}>BoardGames</Link></li>
          <li><Link to={'/boardgames/category/estrategia'}>Estrategia</Link></li>
          <li><Link to={'/boardgames/category/cooperativo'}>Cooperativo</Link></li>
          <li><Link to={'/boardgames/category/bazas'}>Bazas</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li><CardWidget/></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar