import React from 'react'
import { NavLink } from 'react-router-dom'
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <>
    <div>NavBar</div>
    <nav>
      <ul>
        <li>
        <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/category/Estrategia'}>Estrategia</NavLink>
        </li>
        <li>
          <NavLink to={'/category/Cooperativo'}>Cooperativo</NavLink>
        </li>
        <li>
          <NavLink to={'/category/Bazas'}>Bazas</NavLink>
        </li>
      </ul>
      <div>
        <NavLink to={'/cart'}>
          <CartWidget />
        </NavLink>
      </div>
    </nav >
    </>
  )
}