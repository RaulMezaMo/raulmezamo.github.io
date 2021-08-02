import * as React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light text-center">
      <ul className="icons footer-icons list-inline d-flex justify-content-center">
        <li className="list-inline-item"><Link to="https://dribbble.com"><i class="fab fa-dribbble fa-2x"></i></Link></li>
        <li className="list-inline-item"><Link to="https://behance.com"><i class="fab fa-behance fa-2x"></i></Link></li>
        <li className="list-inline-item"><Link to="https://linkedin.com"><i class="fab fa-linkedin-in fa-2x"></i></Link></li>
        <li className="list-inline-item"><Link to="https://instagram.com"><i class="fab fa-instagram fa-2x"></i></Link></li>
      </ul>
      <p>Raul Meza Montoya<br />© 2021</p>
    </footer>
  )
}

export default Footer