import React, { Fragment } from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="Header">
        <div className="LogoAndNavbar">
          <h1 className="Logo">Empresa<span>.com</span></h1>
          <nav className="Navbar">
            <li className="Item Active">Inicio</li>
            <li className="Item">Acerca</li>
            <li className="Item">Servicios</li>
            <li className="Item">Productos</li>
            <li className="Item">Contacto</li>
          </nav>
        </div>
        <hr className="DividingLine"/>
      </header>
    </Fragment>
  )
}

export default Header;