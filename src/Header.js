import React from 'react'
import logo from './img/logo.png'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className="main_menu home_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand">
                                    <img src={logo}
                                        alt="logo"/>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="menu_icon"></span>
                                </button>

                                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                    <ul className="navbar-nav">                
                                        <li className="nav-item">
                                            <a className="nav-link active" ><NavLink className="nav" to={"/"}>Home</NavLink></a>
                                        </li>
                                        <li className="nav-item">
                                            <a  className="nav-link" ><NavLink className="nav" to={"/about"}>About</NavLink></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link"><NavLink className="nav" to={"/service"}>Service</NavLink></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link"><NavLink className="nav" to={"/attorneys"}>Attorneys</NavLink></a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Blog
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item">
                                                   <NavLink className="nav" style={{ color:'white' }} to={"/blog"}>blog</NavLink> </a>
                                                <a className="dropdown-item">Single blog</a>
                                                <a className="dropdown-item">Elements</a>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link"><NavLink className="nav" to={"/contact"}>Contact</NavLink></a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="d-none d-sm-block menu_btn">Let’s Talk</a>
                            </nav>
                        </div>
                    </div>
                </div>
    </header>

    
  )
}

export default Header