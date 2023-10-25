import React from 'react'

export default function Navbar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <a className="navbar-brand text-light mx-4" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse mx-5" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      
    </ul>
  </div>
</nav>
    </div>
  )
}
