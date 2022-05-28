import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='NavBar_ctn'>

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    
 
    <div className="collapse navbar-collapse" id="navbarNav">
           <Link className="nav-link navbar-brand" to="/">Page</Link>
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          <Link className="nav-link" to="/student">Student</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
    </div>
  </div>
</nav>




    </div>
  )
}

export default NavBar