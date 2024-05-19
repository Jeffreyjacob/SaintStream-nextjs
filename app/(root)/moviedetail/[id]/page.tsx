import { SearchParamProps } from '@/constants/type'
import React from 'react'

const page = ({params:{id}}:SearchParamProps) => {
    console.log(id)
  return (
    <div>page</div>
  )
}

export default page