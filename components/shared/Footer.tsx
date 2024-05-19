import Link from 'next/link'
import React from 'react'
import { Separator } from '../ui/separator'
import { Facebook, Github, Instagram, Twitter } from 'lucide-react'

const FooterLink = [
  {name:"Home",path:"/"},
  {name:"Discover",path:"/discover"},
  {name:"Infulence",path:"/"},
  {name:"Release",path:"/release"},
]
const Footer = () => {
  return (
    <div className=' h-full bg-primary-500 border-t-[1px] border-[#4d4d4d] text-white'>
      <div className='wrapper py-3'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between'>
          <div className='w-full'>
            <h2 className='text-[20px] md:text-[25px] w-full md:w-[300px] max-md:py-5'>
              Our platform is trusted by millions & features best updated movies all around the world.
            </h2>
          </div>
          <div className='flex flex-col h-full   md:flex-col-reverse md:justify-between'>
              <div className='flex gap-2  mb-5 md:mb-0'>
               <Instagram />
               <Facebook/>
               <Twitter/>
               <Github/>
              </div>
              <div className='md:flex-1 md:h-[200px]'/>
              <div className='flex'>
                 {
                  FooterLink.map((link)=>(
                    <Link href={link.path}>
                     <div className='flex text-[14px] font-light'>
                       <span>
                       {link.name}
                       </span>
                       <span className='text-[2px] mx-2'>
                       <Separator orientation='vertical'/>
                       </span>
                    </div>
                    </Link>
                  ))
                 }
              </div>
          </div>
        </div>
        
        <div className='flex flex-col w-full md:flex-row text-gray-400 justify-center text-[10px] md:justify-between gap-2 md:gap-0 h-[45px] items-center'>
          <div className='flex w-full justify-center md:justify-start gap-3'>
          <p>Privacy Policy</p>
          <p>Team of service</p>
          <p>Language</p>
          </div>
          <p className='text-center'>2024</p>
        </div>
         
      </div>

    </div>
  )
}

export default Footer