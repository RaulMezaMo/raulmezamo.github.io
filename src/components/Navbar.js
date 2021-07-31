import * as React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand">Navbar</Link>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/" className="nav-link">Proyectos</Link></li>
        <li className="nav-item"><Link to="/acerca-de" className="nav-link">Acerca de</Link></li>
        <li className="nav-item"><Link to="/contacto" className="nav-link">Contacto</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link">EN</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar