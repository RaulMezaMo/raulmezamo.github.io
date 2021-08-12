import React, { useState } from 'react'
import { Link } from 'gatsby'
import Cara from '../components/SvgComponents/cara_svg.js'
import { motion } from "framer-motion"

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  }

  return (
    <motion.nav className="navbar collapsable-navbar">
      <div className="navbar-logo">
        <Link className="logo-link" to="/">
          <Cara className="logo" />
        </Link>
      </div>
      <button className="toggler" type="button" onClick={handleClick}>
        <motion.div
          className={`icon burger-menu ${opened ? "opened" : "closed"}`}
          layout
        >
          <motion.span
            animate={{ rotate: opened ? -45 : 0, y: opened ? 16 : 0 }}
          ></motion.span>
          <motion.span
            style={{ originX: 0.5, originY: 0.5 }}
            animate={{ opacity: opened ? 0 : 1, scaleX: opened ? 0 : 1 }}
            transition={{ duration: .1 }}
          ></motion.span>
          <motion.span
            animate={{ rotate: opened ? 45 : 0, y: opened ? -16 : 0 }}
          ></motion.span>
        </motion.div>
      </button>
      <ul className="navbar-items">
        <li className="nav-item">
          <Link to="/" className="nav-link" activeClassName="active" partiallyActive={true}>Proyectos</Link>
          <span className="divider">/</span>
        </li>
        <li className="nav-item">
          <Link to="#acerca-de" className="nav-link" activeClassName="active" partiallyActive={true}>Acerca de</Link>
          <span className="divider">/</span>
        </li>
        <li className="nav-item">
          <Link to="#contacto" className="nav-link" activeClassName="active" partiallyActive={true}>Contacto</Link>
        </li>
      </ul>
    </motion.nav>
    // <nav className="navbar navbar-light sticky-top fixed-top navbar-expand-sm align-items-center justify-content-end">
    //   <div className="container-fluid">
    //     <Link to="/" className="navbar-brand">
    //       <Cara />
    //     </Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <div class="icon burger-menu">
    //         <span></span>
    //         <span></span>
    //         <span></span>
    //       </div>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav ms-auto">
    //         <div className="element">
    //           <li className="nav-item"><Link to="/" className="nav-link" activeClassName="active" partiallyActive={true}>Proyectos</Link>
    //             <div class="active_background"></div>
    //           </li>
    //           <span className="divider">/</span>
    //         </div>
    //         <div className="element">
    //           <li className="nav-item"><Link to="#acerca-de" className="nav-link" activeClassName="active">Acerca de
    //           </Link>
    //             <div class="active_background"></div>
    //           </li>
    //           <span className="divider">/</span>
    //         </div>
    //         <div className="element">
    //           <li className="nav-item"><Link to="#contacto" className="nav-link" activeClassName="active">Contacto</Link>
    //             <div class="active_background"></div>
    //           </li>
    //         </div>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar