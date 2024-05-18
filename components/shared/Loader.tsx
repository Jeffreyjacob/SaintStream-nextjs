import Image from 'next/image'
import React from 'react';
import Logo from '@/public/assets/images/logo.png'

const Loader = ({message}:{message:string}) => {
    return (
        <div className='flex flex-col h-screen w-full justify-center items-center'>
            <div className='w-[120px] h-[120px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#00925D" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
            </div>
            <div className='mt-4 '>
                <p className='text-[15px] text-center text-white'>{message}</p>
            </div>
        </div>
    )
}

export default Loader