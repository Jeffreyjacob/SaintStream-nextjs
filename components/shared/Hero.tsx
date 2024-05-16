import React, { useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { getMovieGenre, getMovieType } from '@/constants/type';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Bookmark, CirclePlay } from 'lucide-react';
import { StreamingPlatformLogo } from '@/constants';
import Loader from './Loader';

interface HeroDetails {
    Movies: getMovieType[],
    loading: boolean
}

const Hero = ({ Movies, loading }: HeroDetails) => {
    return (
        <div>
                <Carousel>
                <CarouselContent className='w-full'>
                    {Movies?.slice(0, 10)?.map((movie) => (
                        <CarouselItem key={movie.id}
                            className='w-full h-[470px] lg:h-[470px] relative'
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }} >
                            <div className="absolute z-10 inset-0 w-full flex flex-col justify-end pointer-events-none">
                                <div className="h-1/4 bg-gradient-to-t from-primary-500/100 to-transparent"></div>
                            </div>
                            <div className='wrapper mt-36 z-20 justify-center items-center'>
                                <div className='bg-[#0D0C0F] rounded-xl w-fit text-[12px] py-1 px-2'>
                                    {movie.media_type}
                                </div>
                                <h2 className='text-[32px] font-bold'>
                                    {movie.original_title || movie.original_name}
                                </h2>
                                <div className='flex flex-row text-[14px] font-normal text-[#9CA4AB]'>
                                    {movie.first_air_date && <span className='mr-1'>
                                        {movie.first_air_date}
                                    </span>}
                                    <span>
                                        {
                                            movie.genre_ids.map((genre, index) => (
                                                <span key={index} className='ml-1'>
                                                    .{getMovieGenre(genre)}
                                                </span>
                                            ))
                                        }
                                    </span>
                                </div>
                                <p className='text-[10px] md:text-[12px] font-normal md:max-w-md mt-3 line-clamp-4'>
                                    {movie.overview}
                                </p>
                                <div className='flex gap-5 mt-6'>
                                    <Button className='w-[120px] md:w-[215px] justify-start hover:bg-primaryGreen-500/85 h-[46px] flex bg-primaryGreen-500 text-white text-[14px] font-bold'>
                                        <CirclePlay className='w-8 h-8 mx-3' />
                                        Watch
                                    </Button>
                                    <Button className='flex bg-transparent border-2 border-white justify-start w-fit md:w-[180px] h-[46px] hover:text-black hover:bg-white/85'>
                                        <Bookmark className='w-6 h-6 md:h-8 md:w-8 mx-3' />
                                        Add WatchList
                                    </Button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Hero