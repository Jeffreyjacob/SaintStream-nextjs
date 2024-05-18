import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { getMovieType } from '@/constants/type';
import MovieCard from './MovieCard';
import { cn } from '@/lib/utils';

interface Props{
    Movies:getMovieType[],
    TopRatedChange: (movie:getMovieType)=>void
    Loading:boolean,
}


const FeaturedMovie = ({Movies,TopRatedChange,Loading}:Props) => {
    const [onSelect,setOnSelect] = useState(0)
    const size = {
        width:150,
        height:210
    }
  
   useEffect(()=>{
      TopRatedChange(Movies[onSelect!])
   },[onSelect])
  return (
    <div>
         <Swiper
        slidesPerView="auto"
        spaceBetween={18}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
       {
            Movies?.map((movie,index)=>(
                <SwiperSlide
                 style={{width:`150px`,height:`210px`}}>
                    <div onClick={()=>setOnSelect(index)} key={movie.id}
                 className={cn('w-full h-full',{
                    " border-[2px] rounded-xl border-x-primaryGreen-500":onSelect === index
                 })}>
                    <MovieCard Movie={movie} size={size} type='Movie'/>
                    </div>
                </SwiperSlide>
              
            ))
        }

      </Swiper>
    </div>
  )
}

export default FeaturedMovie