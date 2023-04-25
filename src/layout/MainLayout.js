import React from 'react'
import { Navbar } from '../components'
import { Footer } from '../container'


function MainLayout({children}) {
  return (
    <div>
        <Navbar />
        <div>{children}</div>
        <Footer />
    </div>
  )
}

export default MainLayout