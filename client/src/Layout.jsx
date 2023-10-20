import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar,Footer } from './components'

const Layout = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar />
      <div className='px-4 py-12'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout