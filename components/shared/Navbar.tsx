"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Logo from '@/public/assets/images/logo.png'
import { cn } from '@/lib/utils';
import NavItem from './NavItem';
import MobileNav from './MobileNav';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';

const Navbar = () => {
 const [scrolled,setScrolled] = useState(false)

 
 useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  return (
    <nav className={cn(" fixed z-10 inset-x-0 top-0 w-full text-white bg-transparent transition-all",{
     "bg-primary-500/5 backdrop-blur-lg":scrolled
    })}>
      <div className='wrapper flex flex-row justify-between items-center '>
        <Link href='/'>
        <Image src={Logo} alt='logo'
        width={100} height={25} className=' object-contain'/>
        </Link>
        <div>
            <div className=' hidden lg:block'>
            <NavItem/>
            </div>
            <div className='flex items-center lg:hidden '>
             <MobileNav/>
             <UserButton afterSignOutUrl='/'/>
            </div>
        </div>
        <div className='hidden lg:block'>
            <SignedOut>
                <div className='flex flex-row gap-5'>
                <Button className=' bg-transparent border-[2px] border-white rounded-xl px-5 py-5 hover:bg-white/85 hover:text-black'>
                  Sign Up
                </Button>
                <Button className=' bg-primaryGreen-500 py-5 px-5 rounded-xl border-[2px] border-primaryGreen-500 hover:bg-primaryGreen-500/65'>
                    Login
                </Button>
                </div>
            </SignedOut>
            <SignedIn>
                 <UserButton afterSignOutUrl='/'/>
            </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default Navbar