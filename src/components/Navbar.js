import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div >
        <nav className="navbar navbar-expand-lg  bg-success">
  <div className="container-fluid bg-success">
    <Link className="navbar-brand text-white bg-success fs-1 fst-italic fw-bolder" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bg-success" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item bg-success ">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item bg-success">
          <Link className="nav-link text-white" to="/login">Login</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar