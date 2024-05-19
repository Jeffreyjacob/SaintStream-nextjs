import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import Provider from '@/components/shared/Provider'
import { Toaster } from '@/components/ui/toaster'
import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-col min-h-screen bg-primary-500">
        {children}
        </div>
        <Footer/>
        <Toaster/>
    </div>
  )
}

export default Layout