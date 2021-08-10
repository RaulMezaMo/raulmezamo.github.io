import * as React from 'react'
import { Link as a } from 'gatsby'

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center">
      <ul className="icons footer-icons list-inline d-flex justify-content-center">
        <li className="list-inline-item">
          <a href="https://dribbble.com">
            <i className="fab fa-dribbble fa-2x"></i>
          </a>
        </li>
        <li className="list-inline-item"><a href="https://behance.com"><i className="fab fa-behance fa-2x"></i></a></li>
        <li className="list-inline-item"><a href="https://linkedin.com"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
        <li className="list-inline-item"><a href="https://instagram.com"><i className="fab fa-instagram fa-2x"></i></a></li>
      </ul>
      <p>Raul Meza Montoya<br />© 2021</p>
    </footer>
  )
}

export default Footer