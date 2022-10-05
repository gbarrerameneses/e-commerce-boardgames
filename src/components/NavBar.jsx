import React from 'react'
import { NavLink } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import { useCart } from '../context/CartContext'
import LogoNavBar from './../assets/LogoNavBar.png'

export const NavBar = () => {

  const { cart } = useCart()

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink  to={"/"}> <img src={LogoNavBar} alt="" style={{ width: '80px' }} /> </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Bazas"}>Bazas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Cooperativo"}>Cooperativo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Estrategia"}>Estrategia</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/cart"} className="nav-link"><CartWidget /></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}