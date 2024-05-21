"use client"
import Loader from '@/components/shared/Loader';
import MovieReleaseContainer from '@/components/shared/MovieReleaseContainer';
import { Month } from '@/constants';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import React from 'react';


const page = () => {
    const baseUrl = 'https://api.themoviedb.org/3'
    const headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTc3NGUwMzcxM2EzOWFhZmM3ZDAxNGZlNTQ2ZDViZiIsInN1YiI6IjY0YjdhYmYzZWVlMTg2MDEzYTY1N2I1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qLbJ84DFt_LVBFESNprrO3RxWnfj55GcATnvwfjZTiU'
    }
    const { data: RegularMovie, isLoading: RegularMovieLoading } = useQuery({
        queryKey: ['RegularMovie'],
        queryFn: () => axios.get(`${baseUrl}/movie/upcoming?language=en-US&page=1&region=US&limit=50`, { headers: headers })
    })
    const LoaderSkeleton = ()=>{
        return(
            <div className='flex gap-3'>
                 <div className='w-16 h-16 rounded-lg'/>
            </div>
        )
      }
    return (
        <div className='text-white'>
            <div className='w-full h-[400px] md:h-[320px] object-contain relative'
                style={{
                    backgroundImage: `url(assets/images/releaseWallpaper.jpg)`,
                    backgroundSize: "cover"
                }}>
                <div className=' absolute inset-0  flex flex-col justify-end w-full h-full  pointer-events-none'>
                    <div className='h-1/2 bg-gradient-to-t from-primary-500/100 to-transparent' />
                </div>
                <div className='absolute wrapper inset-x-0 bottom-2'>
                    <div className='w-full md:w-[500px]'>
                        <h2 className='text-[22px] md:text-[35px] font-bold'>Schedule Release All Movie Around The World</h2>
                        <p className='text-[13px] md:text-[15px] font-light'>Get up to date to move release all round the world</p>
                    </div>
                </div>
            </div>
            {
                RegularMovieLoading ? (
                    <div className='flex flex-col h-[150px] w-full justify-center items-center'>
                        <div className='w-[120px] h-[120px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#00925D" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
                        </div>
                        <div className='mt-4 '>
                            <p className='text-[15px] text-center text-white'>Loading...</p>
                        </div>
                    </div>
                ) : (
                    <div className='wrapper'>
                        <h2 className='mt-1 md:mt-6 text-[19px] font-semibold'>Upcoming Movie</h2>
                        <MovieReleaseContainer Movie={RegularMovie?.data?.results} />
                    </div>
                )
            }
        </div>
    )
}

export default page