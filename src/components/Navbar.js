import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Cara from '../components/SvgComponents/cara_svg.js'
import { motion, useMotionValue, useAnimation } from "framer-motion"

const Navbar = () => {

  /**
   * Animation variables & functions
   */
  const navbarItemsVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -16 },
  }
  const y = useMotionValue(0);
  const animateNavbarItems = useAnimation();

  /**
  * Triggerable navbar
  **/
  const [opened, setOpened] = useState(false);

  const clickNavbarToggler = (e) => {
    animateNavbarItems.start(opened ? "closed" : "open");
    setOpened(!opened);
    console.log(e);
    y.get() !== 8 ? y.set(8) : y.set(0);
  };

  /**
   * Detecting collapsable navbar on breakpoints
   */

  const smallBreakpoint = 992; //Breakpoint for collapsing navbar
  const [width, setWidth] = useState(window.innerWidth);
  const [deviceSize, setDeviceSize] = useState("small");

  // function handleResize() {
  //   setWidth(window.innerWidth);
  //   if (width > smallBreakpoint) {
  //     if (deviceSize !== "big") {
  //       setDeviceSize("big");
  //       setOpened(true);
  //       // animateNavbarItems.start("open");
  //     }
  //   } else {
  //     setDeviceSize("small");
  //     setOpened(false);
  //     // animateNavbarItems.start("closed");
  //   }
  // }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    function handleResize(deviceSize) {
      setWidth(window.innerWidth);
      if (width > smallBreakpoint) {
        if (deviceSize !== "big") {
          setDeviceSize("big");
          setOpened(true);
          animateNavbarItems.start("open");
        }
      } else {
        setDeviceSize("small");
        setOpened(false);
        animateNavbarItems.start("closed");
      }
    }
    console.log("use effect");
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width]);

  return (
    <motion.nav className={`navbar ${deviceSize === "small" ? "small-navbar" : "big-navbar"}`} >
      <div className="navbar-logo">
        <Link className="logo-link" to="/">
          <Cara className="logo" />
        </Link>
      </div>
      {/* Toggler */}
      <button className="toggler" type="button" onClick={clickNavbarToggler}>
        <motion.div
          className={`icon burger-menu`}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
      {/* Navbar elements and menu */}
      {/* <AnimatePresence> */}
      <motion.ul
        className={`navbar-items ${opened ? "open-items" : "closed-items"}`}
        animate={animateNavbarItems}
        // initial={opened ? "open" : "closed"}
        variants={navbarItemsVariants}
      >
        <svg id="menu_triangle" xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8">
          <g id="menu_triangle_group" data-name="menu_triangle_group">
            <polyline points="0 8 8 0 16 8" fill="#fff" stroke="#000" stroke-miterlimit="10" />
          </g>
        </svg>
        <li className="nav-item">
          <Link to="/" className="nav-link" activeClassName="active" partiallyActive={true} onClick={clickNavbarToggler}>Proyectos</Link>
          <span className="divider">/</span>
        </li>
        <li className="nav-item">
          <Link to="/#acerca-de" className="nav-link" activeClassName="active" partiallyActive={true} onClick={clickNavbarToggler}>Acerca de</Link>
          <span className="divider">/</span>
        </li>
        <li className="nav-item">
          <Link to="/#contacto" className="nav-link" activeClassName="active" partiallyActive={true} onClick={clickNavbarToggler}>Contacto</Link>
        </li>
      </motion.ul>
      {/* </AnimatePresence> */}
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