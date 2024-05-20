import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { EpisodeType, getMovieType } from '@/constants/type';
import EpisodeCard from './EpisodeCard';


interface Props{
  Episode:EpisodeType[],
   
}

export default function EpisodeRow({Episode}:Props) {
    console.log(Episode)
  return (
    <>
   
      <Swiper
        slidesPerView="auto"
        spaceBetween={18}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {
            Episode.map((episode)=>(
                <SwiperSlide key={episode.id}
                 style={{width:"280px",height:"220px"}}>
                   <EpisodeCard Episode={episode}/>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}