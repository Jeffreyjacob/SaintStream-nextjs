import Image from 'next/image'
import React from 'react';
import Logo from '@/public/assets/images/logo.png'

const Loader = () => {
    return (
        <div className='flex flex-col h-screen w-full justify-center items-center'>
            <div className='w-[120px] h-[120px]'>
                
            </div>
            <div className='mt-4'>
                <Image src={Logo} alt='logo'
                    width={100} height={25} className=' object-contain' />
            </div>
        </div>
    )
}

export default Loader