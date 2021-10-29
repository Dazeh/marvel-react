import React from 'react'
import logo from '../Marvel_Logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="p-3 bg-dark text-white">
   
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
        <img src={logo} alt="" />
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
       <Link to='/'>Home</Link>
        </ul>

        

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
     
    </div>
  </header>
    )
}
