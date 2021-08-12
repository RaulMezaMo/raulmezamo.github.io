import React, { useState } from 'react'
import { Link } from 'gatsby'
import Cara from '../components/SvgComponents/cara_svg.js'
import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}
      variants={variants} className="navbar collapsable-navbar">
      <button className="toggler" type="button" onClick={() => setIsOpen(isOpen => !isOpen)}>
        <div className="icon burger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
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