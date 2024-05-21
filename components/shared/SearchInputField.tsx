import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

interface Props{
    HandleChange:(value:string)=>void,
    navigate:()=>void
}

const SearchInputField = ({HandleChange,navigate}:Props) => {
  return (
    <div className='absolute  -bottom-[68px] md:right-[40px] bg-primaryHover-500 py-4 px-4 text-white flex w-full md:w-[350px] transition-all rounded-b-lg'>
         <Input type='text' placeholder='Search...' 
         className=' text-white bg-primary-500 border-none  px-4 focus:border-none focus-visible:border-none'
          onChange={(e)=>HandleChange(e.target.value)}/>
          <Button className=' bg-primaryGreen-500'>
            <Search 
            className='w-6 h-6 text-white font-bold' 
            onClick={navigate} />
         </Button>
     </div>
  )
}

export default SearchInputField