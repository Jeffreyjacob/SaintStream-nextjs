"use client"
import { HeaderLink } from '@/constants'
import { SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NavItem = () => {
    const pathname = usePathname()
  return (
    <div>
        <ul className='flex flex-col  items-start gap-5 lg:flex-row lg:items-center'>
            {
             HeaderLink.map((link)=>{
                const active = pathname === link.path
                return(
                <li className={cn("text-white",{
                    "text-primaryGreen-500":active
                })} key={link.name}>
                  <Link href={link.path}>
                    {link.name}
                  </Link>
                </li>
        )
})
            }
        </ul>
        <div className='block lg:hidden mt-4'>
        <SignedOut>
                <div className='flex flex-row gap-5'>
                <Link href='/sign-up'>
                <Button className=' bg-transparent border-[2px] border-white rounded-xl px-5 py-5 hover:bg-white/85 hover:text-black'>
                  Sign Up
                </Button>
                </Link>
                <Link href='/sign-in'>
                <Button className=' bg-primaryGreen-500 py-5 px-5 rounded-xl border-[2px] border-primaryGreen-500 hover:bg-primaryGreen-500/65'>
                  Login
                </Button>
                </Link>
                </div>
            </SignedOut>
        </div>
    </div>
  )
}

export default NavItem