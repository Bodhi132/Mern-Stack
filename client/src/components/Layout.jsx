import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-slate-100'>
        <Header/>
      <div className='flex flex-row '>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout