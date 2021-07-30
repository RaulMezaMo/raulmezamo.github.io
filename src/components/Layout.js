import * as React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

const Layout = () => {
  return (
    <main>
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
      </Helmet>
      <Navbar />
      <p>Hi!!</p>
    </main>
  )
}

export default Layout