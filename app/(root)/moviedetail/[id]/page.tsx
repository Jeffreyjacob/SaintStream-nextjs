"use client"
import Loader from '@/components/shared/Loader'
import { Button } from '@/components/ui/button'
import { MovieDetailParams, SearchParamProps, getMovieGenre } from '@/constants/type'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Bookmark, CirclePlay } from 'lucide-react'
import React, { useState } from 'react'

const page = ({ params: { id } }: SearchParamProps) => {
    const baseUrl = 'https://api.themoviedb.org/3'
    const headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTc3NGUwMzcxM2EzOWFhZmM3ZDAxNGZlNTQ2ZDViZiIsInN1YiI6IjY0YjdhYmYzZWVlMTg2MDEzYTY1N2I1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qLbJ84DFt_LVBFESNprrO3RxWnfj55GcATnvwfjZTiU'
    }
    const { data: MovieDetail, isLoading: MovieDetailLoading } = useQuery({
        queryKey: ['movieDetail'],
        queryFn: () => axios.get(`${baseUrl}/movie/${id}?language=en-US`, { headers: headers })
    })

    const movie: MovieDetailParams = MovieDetail?.data
    console.log(movie)
    return (
        <div className='text-white'>
            {
                MovieDetailLoading ? <Loader message='Loading...' /> : (
                    <div className='w-full h-[400px]  relative'
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            height: "400px"
                        }}>
                        <div className=' absolute inset-0 flex flex-col w-full justify-end h-full pointer-events-none'>
                            <div className='h-1/4 bg-gradient-to-t from-primary-500 to-bg-transparent' />
                        </div>
                        <div className='wrapper flex flex-col justify-end h-full'>
                            <div className='bg-[#0D0C0F] rounded-xl w-fit text-[12px] py-1 px-2'>
                                movie
                            </div>
                            <h2 className='text-[32px] font-bold'>
                                {movie.original_title || movie.original_title}
                            </h2>
                            <div className='flex flex-row text-[14px] font-normal text-[#9CA4AB]'>
                                 <p>{movie.release_date}</p>
                                <span>
                                    {
                                        movie.genres.map((genre, index) => (
                                            <span key={index} className='ml-1'>
                                                .{getMovieGenre(genre.id)}
                                            </span>
                                        ))
                                    }
                                </span>
                            </div>
                            <div className='flex gap-5 mt-6 '>
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

                    </div>
                )
            }
        </div>
    )
}

export default page