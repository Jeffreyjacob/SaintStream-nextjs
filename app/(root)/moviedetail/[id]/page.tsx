"use client"
import Loader from '@/components/shared/Loader'
import MovieRow from '@/components/shared/MovieRow'
import Review from '@/components/shared/Review'
import Topcast from '@/components/shared/Topcast'
import VideoPlayer from '@/components/shared/VideoPlayer'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {  MovieDetailType, SearchParamProps, getMovieGenre } from '@/constants/type'
import { cn } from '@/lib/utils'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { ArrowDownToLine, Bookmark, CirclePlay, ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'

const page = ({ params: { id } }: SearchParamProps) => {
    const baseUrl = 'https://api.themoviedb.org/3'
    const headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTc3NGUwMzcxM2EzOWFhZmM3ZDAxNGZlNTQ2ZDViZiIsInN1YiI6IjY0YjdhYmYzZWVlMTg2MDEzYTY1N2I1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qLbJ84DFt_LVBFESNprrO3RxWnfj55GcATnvwfjZTiU'
    }
    const { data: MovieDetail, isLoading: MovieDetailLoading } = useQuery({
        queryKey: ['movieDetail'],
        queryFn: () => axios.get(`${baseUrl}/movie/${id}?language=en-US`, { headers: headers }),
        gcTime:0,
        staleTime: 0, // Always consider the data as stale
        refetchOnMount: true,
    })
    const {data:TopCastData,isLoading:TopCastloading} = useQuery({
        queryKey:['TopCast'],
        queryFn:()=> axios.get(`${baseUrl}/movie/${id}/credits?language=en-US`,{headers:headers}),
        gcTime:0,
        staleTime: 0, // Always consider the data as stale
        refetchOnMount: true,
    })

    const {data:SimilarMovie,isLoading:SimilarMovieLoading} = useQuery({
        queryKey:['SimilarMovie'],
        queryFn:()=> axios.get(`${baseUrl}/movie/${id}/similar?language=en-US&page=1`,{headers:headers}),
        gcTime:0,
        staleTime: 0, // Always consider the data as stale
        refetchOnMount: true,
    })
    
    const {data:ReviewData,isLoading:ReviewLoading} = useQuery({
        queryKey:['MovieReview'],
        queryFn:()=> axios.get(`${baseUrl}//movie/${id}/reviews?language=en-US&page=1`,{headers:headers})
    })
    
      
    const movie:MovieDetailType = MovieDetail?.data
    const [selectSection,setSelectSection] = useState("similar")
    const [isDialogOpen, setDialogOpen] = useState(false);
    return (
        <div className='text-white'>
            {
                MovieDetailLoading ? <Loader message='Loading...' /> : (
                    <div>
                        {/**Hero section */}
                        <div className='w-full h-[350px]  relative'
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                                backgroundSize: "cover",
                                height: "350px"
                            }}>
                            <div className=' absolute inset-0 flex flex-col w-full justify-end h-full pointer-events-none'>
                                <div className='h-1/4 bg-gradient-to-t from-primary-500 to-bg-transparent' />
                            </div>
                            <div className='absolute inset-x-0 wrapper -bottom-24 flex flex-col justify-end h-full'>
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
                                <div className='flex w-full flex-row justify-start md:justify-between gap-4'>
                                    <div className='flex gap-3 mt-6 '>
                                    <Dialog>
                                            <DialogTrigger className='w-[137px] md:w-[215px] justify-start hover:bg-primaryGreen-500/85 h-[46px] flex bg-primaryGreen-500 text-white text-[14px] font-bold rounded-lg items-center' onClick={()=>setDialogOpen(true)}>
                                                <CirclePlay className='w-8 h-8 mx-3' />
                                                Watch
                                            </DialogTrigger>
                                          <VideoPlayer id={id} type='movie' IsCLose={isDialogOpen} HandleClose={()=>setDialogOpen(false)}/>
                                        </Dialog>
                                        <Button className='flex  bg-transparent border-2 border-white justify-start w-fit md:w-[180px] h-[46px] hover:text-black hover:bg-white/85'>
                                            <Bookmark className='w-5 h-5 md:h-8 md:w-8 md:mx-3' />
                                            <span className='hidden md:block'>
                                                Add WatchList
                                            </span>
                                        </Button>
                                    </div>
                                    {/**only on small and mobile screen */}
                                    <div className='flex items-center gap-3 mt-6'>
                                        <Button className='flex  bg-transparent border-2 border-white justify-start w-fit h-[46px] hover:text-black hover:bg-white/85'>
                                            <ThumbsUp className='w-5 h-5 md:mx-3' />
                                            <span className='hidden md:block'>
                                                Like
                                            </span>
                                        </Button>
                                        <Button className='flex  bg-transparent border-2 border-white justify-start w-fit h-[46px] hover:text-black hover:bg-white/85'>
                                            <ArrowDownToLine className='w-5 h-5 md:mx-3' />
                                            <span className='hidden md:block'>
                                                Download
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/**Story line */}
                        <div className=' mt-28 wrapper'>
                            <h3 className='text-[18px] font-bold'>Storyline</h3>
                            <p className='text-[14px] font-light text-gray-400'>
                                {movie.overview}
                            </p>
                        </div>
                        {/**Top cast */}
                        <div className='wrapper'>
                         <h2 className='text-[18px] font-bold mb-4'>Top Cast</h2>
                         <Topcast movieData={TopCastData?.data?.cast} loading={TopCastloading}/>
                        </div>
                        {/**Similar and Review */}
                        <div className='wrapper'>
                        <div className='flex gap-4'>
                            <Button onClick={()=>setSelectSection("similar")}
                            className={cn(" bg-transparent hover:bg-transparent rounded-none",{
                                " border-b-2 border-primaryGreen-500":selectSection === 'similar'
                            })}>
                              Similar Movie
                            </Button>
                            <Button onClick={()=>setSelectSection("review")}
                             className={cn(" bg-transparent hover:bg-transparent rounded-none",{
                                " border-b-2 border-primaryGreen-500":selectSection === 'review'
                            })}>
                              Review
                            </Button>
                        </div>
                        {/**select content from button */}
                        <div className='my-10'>
                        {
                        selectSection === "similar" ? (<div>
                             <MovieRow Movies={SimilarMovie?.data?.results} loading={SimilarMovieLoading} type='Movie' size={{width:280,height:180}} />
                        </div>):
                        (<div>
                         <Review Reviews={ReviewData?.data?.results} loading={ReviewLoading}/>
                        </div>)
                        }
                        </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default page