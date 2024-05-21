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
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SearchInputField from './SearchInputField';

const Navbar = () => {
 const [scrolled,setScrolled] = useState(false);
 const [ShowSearchBar, setShowSearchBar] = useState(false);
 const [searchValue,setSearchValue] = useState("")
 
 useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const router = useRouter()
  const navigateToSearchPage = ()=>{
    setShowSearchBar(false);
    router.push(`/Search/${searchValue}`)
  }
 
  return (
    <nav className={cn(" fixed z-10 inset-x-0 top-0 w-full shadow-xl text-white bg-primary-500/20 transition-all",{
     "bg-primary-500/5 backdrop-blur-lg":scrolled
    })}>
      <div className='wrapper flex flex-row justify-between items-center relative'>
        <Link href='/'>
        <Image src={Logo} alt='logo'
        width={100} height={25} className=' object-contain'/>
        </Link>
        <div>
            <div className=' hidden lg:block'>
            <NavItem/>
            </div>
            <div className='flex items-center lg:hidden'>
            <Search className='w-6 h-6 font-bold mr-4 hover:cursor-pointer focus:cursor-pointer' 
            onClick={()=>setShowSearchBar(prev => !prev)} />
            <UserButton afterSignOutUrl='/'/>
             <MobileNav/>
            </div>
        </div>
        <div className='hidden lg:block '>
          <div className='flex items-center gap-5'>
          <Search className='w-7 h-7 hover:cursor-pointer focus:cursor-pointer' 
          onClick={()=>setShowSearchBar(prev => !prev)} />
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
              <div className='flex gap-4'>
                 <UserButton afterSignOutUrl='/'/>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
      {
        ShowSearchBar && <SearchInputField HandleChange={setSearchValue} navigate={navigateToSearchPage}/>
      }
    </nav>
  )
}

export default Navbar