import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-primary-500 md:bg-black text-white'>
       {children}
    </div>
  )
}

export default Layout