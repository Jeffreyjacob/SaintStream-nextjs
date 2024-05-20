import { EpisodeType } from '@/constants/type'
import Image from 'next/image'
import React from 'react'

interface props{
    Episode:EpisodeType
}

const EpisodeCard = ({Episode}:props) => {
  return (
    <div>
     <Image src={`https://image.tmdb.org/t/p/original/${Episode.still_path}`} 
     alt='' width={200} height={80} className='rounded-lg'/>
      <div className='my-3 w-[220px]'>
        <h5 className='text-[14px] font-semibold'>episode {Episode.episode_number}</h5>
        <p className='text-[12px] '>{Episode.name}</p>
        <p className='text-[10px] font-light line-clamp-4'>{Episode.overview}</p>
      </div>
    </div>
  )
}

export default EpisodeCard