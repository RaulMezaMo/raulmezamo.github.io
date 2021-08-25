import * as React from 'react'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center">
      <ul className="icons footer-icons list-inline d-flex justify-content-center">
        <li className="list-inline-item">
          <motion.a whileTap={{ y: 2 }} href="https://dribbble.com/RaulMM">
            <i className="fab fa-dribbble fa-2x"></i>
          </motion.a>
        </li>
        <li className="list-inline-item"><motion.a whileTap={{ y: 2 }} href="https://www.behance.net/raulm"><i className="fab fa-behance fa-2x"></i></motion.a></li>
        <li className="list-inline-item"><motion.a whileTap={{ y: 2 }} href="https://www.linkedin.com/in/raul-meza-montoya/"><i className="fab fa-linkedin-in fa-2x"></i></motion.a></li>
      </ul>
      <p>Raul Meza Montoya<br />© 2021</p>
    </footer>
  )
}

export default Footer