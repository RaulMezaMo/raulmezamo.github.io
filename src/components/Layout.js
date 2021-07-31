import * as React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </main>

  )
}

export default Layout