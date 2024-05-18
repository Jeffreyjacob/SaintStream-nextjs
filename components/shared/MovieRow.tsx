import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { getMovieType } from '@/constants/type';
import MovieCard from './MovieCard';


interface Props{
    Movies:getMovieType[],
    loading:boolean,
    size:{
        width:number,
        height:number
    }
    type:"Movie" | "Series"
}

export default function MovieRow({Movies,loading,size,type}:Props) {
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
            Movies?.map((movie)=>(
                <SwiperSlide key={movie.id}
                 style={{width:`${size.width}px`,height:`${size.height}px`}}>
                    <MovieCard Movie={movie} size={size} type={type}/>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
