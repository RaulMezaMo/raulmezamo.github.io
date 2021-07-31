import * as React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer>
      <small>Footer</small>
      <ul>
        <li><Link to="https://dribbble.com">Dribbble</Link></li>
      </ul>
      <p>Raul Meza Montoya © 2021</p>
    </footer>
  )
}

export default Footer