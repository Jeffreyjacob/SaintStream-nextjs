import { getMovieGenre, getMovieType } from '@/constants/type';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Film, Star } from 'lucide-react';

interface Props{
    Movies:getMovieType[],
    loading:boolean
}


const PopularMovies = ({Movies,loading}:Props) => {
  return (
    <div className='flex '>
         <Swiper
        slidesPerView="auto"
        spaceBetween={23}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {
            Movies?.map((movie,index)=>(
                <SwiperSlide key={movie.id}
                 style={{width: `320px`,height:`220px`}}>
                   <div className='flex w-full py-[10px] px-[10px] flex-row justify-between items-center gap-5  hover:bg-primaryHover-500 hover:rounded-lg transition duration-300 transform hover:scale-110 my-[10px] mx-[10px]'>
                      <p className='text-[30px] font-semibold'>{index + 1}</p>
                      <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt=''
                      width={120} height={180} className='rounded-lg' />
                      <div className='flex-1'>
                         <p className='text-[13px]'>{movie.original_title}</p>
                         <div className='text-[10px] text-[#4e6b86] flex gap-2 mt-2'>
                         <Film className='w-4 h-4'/>
                         <span>
                            {
                                movie.genre_ids.map((genre)=>(
                                    <span className='gap-1 flex flex-wrap'>.
                                        {
                                            getMovieGenre(genre)
                                        }
                                    </span>
                                ))
                            }
                         </span>
                         </div>
                         <div className='flex gap-2 items-center text-[11px] mt-3'>
                             <Star className='w-5 h-5 text-yellow-500'/>
                             <span>
                                {movie.vote_average}
                             </span>{" "}|
                             <span>
                                Movie
                             </span>
                         </div>
                      </div>
                   </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}

export default PopularMovies