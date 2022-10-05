import React from 'react'
import { NavLink } from 'react-router-dom'
// import LogoNavBar from './../assets/LogoNavBar.png'
// import { CartWidget } from './CartWidget'

const Footer = () => {
  return (
    <>
    <div className='bg-dark mt-5'>
        <div className="container pb-4">
           {/* <NavLink className="nav-link" to={"/"}> <img src={LogoNavBar} alt=""  style={{ width: '100px' }}/></NavLink> */}
        <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink style={{ color: 'var(--bs-light)' }} className="nav-link" to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={{ color: 'var(--bs-light)' }} className="nav-link" to={"/category/Bazas"}>Bazas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={{ color: 'var(--bs-light)' }} className="nav-link" to={"/category/Cooperativo"}>Cooperativo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={{ color: 'var(--bs-light)' }} className="nav-link" to={"/category/Estrategia"}>Estrategia</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink style={{ color: 'var(--bs-light)' }} to={"/cart"} className="nav-link"><CartWidget /></NavLink>
            </li> */}
        {/* <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
    </ul>
        </div>
    </div>
    </>
    
  )
}

export default Footer