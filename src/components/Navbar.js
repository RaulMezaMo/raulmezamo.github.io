import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Cara from '../components/SvgComponents/cara_svg.js'
import { motion, useMotionValue, useAnimation } from "framer-motion"

const Navbar = (activeMenu) => {

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
    if (deviceSize === "small") {
      animateNavbarItems.start(opened ? "closed" : "open");
      setOpened(!opened);
      y.get() !== 8 ? y.set(8) : y.set(0);
    }
  };

  /**
   * Detecting collapsable navbar on breakpoints
   */

  const smallBreakpoint = 576; //Breakpoint for collapsing navbar
  const [width, setWidth] = useState(window.innerWidth);
  const [deviceSize, setDeviceSize] = useState("small");

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

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    handleResize();
    // console.log("use effect");
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width]);

  useEffect(() => {
    console.log(activeMenu);
  }, { activeMenu });

  return (
    <motion.nav className={`navbar ${deviceSize === "small" ? "small-navbar" : "big-navbar"}`} >
      <div className="navbar-logo">
        <Link className="logo-link" to="/">
          <Cara className="logo" />
        </Link>
      </div>
      {/* Toggler */}
      <motion.button className="toggler" type="button" whileTap={{ scale: 0.8 }} onClick={clickNavbarToggler}>
        <motion.div
          className={`icon burger-menu`}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.span
            animate={{ rotate: opened ? -45 : 0, y: opened ? 12 : 0 }}
          ></motion.span>
          <motion.span
            style={{ originX: 0.5, originY: 0.5 }}
            animate={{ opacity: opened ? 0 : 1, scaleX: opened ? 0 : 1 }}
            transition={{ duration: .1 }}
          ></motion.span>
          <motion.span
            animate={{ rotate: opened ? 45 : 0, y: opened ? -12 : 0 }}
          ></motion.span>
        </motion.div>
      </motion.button>
      {/* Navbar elements and menu */}
      <motion.ul
        className={`navbar-items ${opened ? "open-items" : "closed-items"}`}
        animate={animateNavbarItems}
        variants={navbarItemsVariants}
      >
        <svg id="menu_triangle" xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8">
          <g id="menu_triangle_group" data-name="menu_triangle_group">
            <polyline points="0 8 8 0 16 8" fill="#fff" stroke="#000" stroke-miterlimit="10" />
          </g>
        </svg>
        <li className="nav-item">
          <Link to="/" className="nav-link" activeClassName="active" partiallyActive={true} onClick={clickNavbarToggler}><span className="text">Proyectos</span></Link>
          <span className="divider">/</span>
        </li>
        <li className="nav-item">
          <Link to="/#acerca-de" className="nav-link" activeClassName="active" partiallyActive={true} onClick={clickNavbarToggler}><span className="text">Acerca de</span></Link>
          <span className="divider">/</span>
        </li>
        <li className="nav-item">
          <Link to="/#contacto" className="nav-link" activeClassName="active" partiallyActive={true} onClick={clickNavbarToggler}><span className="text">Contacto</span></Link>
        </li>
      </motion.ul>
    </motion.nav>
  )
}

export default Navbar