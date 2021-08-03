import * as React from 'react'
import { Link } from 'gatsby'
import Cara from '../images/svgs/cara_sm.svg'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg align-items-center">
      <Link className="navbar-brand">
        <Cara />
      </Link>
      <ul className="navbar-nav d-flex align-items-center">
        <li className="nav-item"><Link to="/" className="nav-link" activeClassName="active" partiallyActive={true}>Proyectos</Link></li>
        /
        <li className="nav-item"><Link to="#acerca-de" className="nav-link" activeClassName="active">Acerca de</Link></li>
        /
        <li className="nav-item"><Link to="#contacto" className="nav-link" activeClassName="active">Contacto</Link></li>
        {/* <li className="nav-item"><Link to="/" className="nav-link">EN</Link></li> */}
      </ul>
    </nav>
  )
}

export default Navbar