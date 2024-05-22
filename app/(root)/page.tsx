"use client"
import Hero from "@/components/shared/Hero";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import axois from 'axios'
import { StreamingPlatformLogo } from "@/constants";
import Loader from "@/components/shared/Loader";
import MovieRow from "@/components/shared/MovieRow";
import axios from "axios";
import PopularMovies from "@/components/shared/PopularMovies";
import { useState } from "react";
import FeaturedMovie from "@/components/shared/FeaturedMovie";
import { getMovieGenre, getMovieType } from "@/constants/type";
import { Bookmark, CirclePlay, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
    const baseUrl = 'https://api.themoviedb.org/3'
    const headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTc3NGUwMzcxM2EzOWFhZmM3ZDAxNGZlNTQ2ZDViZiIsInN1YiI6IjY0YjdhYmYzZWVlMTg2MDEzYTY1N2I1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qLbJ84DFt_LVBFESNprrO3RxWnfj55GcATnvwfjZTiU'
    }
    const { data: TrendingMovies, isLoading } = useQuery({
        queryKey: ['Trending'],
        queryFn: () => axois.get(`${baseUrl}/trending/all/day?language=en-US`, { headers: headers }),
    })
    const { data: JustReleaseMovie, isLoading: JustReleaseLoading } = useQuery({
        queryKey: ['JustRelease'],
        queryFn: () => axios.get(`${baseUrl}/movie/now_playing?language=en-US&page=1&region=US`, { headers: headers })
    })
    const { data: PopularMovie, isLoading: PopularMovieLoading } = useQuery({
        queryKey: ['Popular'],
        queryFn: () => axios.get(`${baseUrl}/movie/popular?language=en-US&page=2`, { headers: headers })
    })
    const { data: TopRatedMovie, isLoading: TopRatedLoading } = useQuery({
        queryKey: ['TopRated'],
        queryFn: () => axios.get(`${baseUrl}/movie/top_rated?language=en-US&page=1`, { headers: headers })
    })
    const {data:TvShow,isLoading:TvShowLoading} = useQuery({
        queryKey:['AiringToday'],
        queryFn:()=> axios.get(`${baseUrl}/tv/on_the_air?language=en-US&page=1`,{headers:headers})
    })
    const {data:RegularMovie,isLoading:RegularMovieLoading} = useQuery({
        queryKey:['RegularMovie'],
        queryFn:()=> axios.get(`${baseUrl}/movie/upcoming?language=en-US&page=2`,{headers:headers})
    })
    const [selectTopRated, setSelectTopRated] = useState<getMovieType>()
    return (
        <main className=" bg-primary-500 text-white min-h-screen">
            <div>
                {
                    isLoading ? <Loader message="Loading..." /> : (
                        <>
                            <Hero Movies={TrendingMovies?.data?.results} loading={isLoading} />
                            {/**streaming platform logo */}
                            <div className='wrapper flex flex-row md:gap-6 gap-2 mt-5'>
                                {
                                    StreamingPlatformLogo.map((logo) => (
                                        <div className=" bg-black rounded-xl p-2" key={logo.name}>
                                            <Image src={logo.imgUrl} alt="platform-logo"
                                                width={100} height={60} />
                                        </div>
                                    ))
                                }
                            </div>
                            {/**Just released Movies */}
                            <div className="pl-5 md:pl-10 py-5  ">
                                <h3 className="text-[19px] font-semibold my-6">Just Release</h3>
                                <MovieRow Movies={JustReleaseMovie?.data?.results} loading={JustReleaseLoading}
                                    size={{ width: 200, height: 260 }} type="Movie" />
                            </div>

                            {/**Popular of the week */}
                            <div className="pl-5 md:pl-10 py-5  ">
                                <h3 className="text-[19px] font-semibold my-6">Popular of the week</h3>
                                <PopularMovies Movies={PopularMovie?.data?.results} loading={PopularMovieLoading} />
                            </div>

                            {/**Featured in saintStream today */}
                            <div className=" relative py-16 h-[660px] lg:h-[440px]"
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${selectTopRated?.backdrop_path})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}>
                                <div className="absolute  inset-0 w-full h-full flex flex-col justify-between pointer-events-none">
                                    <div className="h-1/4 bg-gradient-to-b from-primary-500/100 to-transparent"></div>
                                    <div className="h-1/4 bg-gradient-to-t from-primary-500/100 to-transparent"></div>
                                </div>
                                <div className="py-4 px-5 lg:px-10">
                                    <h2 className="text-[19px] md:text-[25px] font-semibold ">Featured in SaintStream</h2>
                                    <p className=" font-light">Best Feature for you today</p>
                                </div>
                                <div className="flex flex-col-reverse lg:flex-row w-full">
                                    <div className="flex flex-col w-full h-fit lg:w-1/2 items-start justify-start mt-8 md:mt-0 md:items-center px-5 md:px-10 relative">
                                        <div className="flex flex-col gap-3">
                                            <h2 className="text-[19px] md:text-[30px]">{selectTopRated?.original_title}</h2>
                                            <p className="flex items-center gap-3 text-[12px]">
                                                <span>
                                                    <Star className="w-5 h-5 text-yellow-600" />
                                                </span>
                                                <span>
                                                    {selectTopRated?.vote_average}
                                                </span>
                                                <span className="flex flex-row">
                                                    {
                                                        selectTopRated?.genre_ids.map((genre, index) => (
                                                            <span key={index} className="flex gap-3 text-[10px] text-[#4e6b86]">
                                                                .{getMovieGenre(genre)}
                                                            </span>
                                                        ))
                                                    }
                                                </span>
                                            </p>
                                            <p className="text-[10px] line-clamp-4">
                                                {selectTopRated?.overview}
                                            </p>
                                        </div>
                                        <div className='absolute -bottom-16 md:left-10 flex gap-5 mt-6 '>
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
                                    <div className="w-full pl-5 md:pl-10 lg:w-1/2">
                                        <FeaturedMovie Movies={TopRatedMovie?.data?.results}
                                            TopRatedChange={setSelectTopRated} Loading={TopRatedLoading} />
                                    </div>
                                </div>
                            </div>

                            {/**Movie */}
                            <div className="pl-5 md:pl-10 py-5 ">
                            <h3 className="text-[19px] font-semibold my-6">Movies</h3>
                            <MovieRow Movies={RegularMovie?.data?.results} type='Movie' loading={RegularMovieLoading} size={{width:260,height:200}} />
                            </div>
                              {/* *series*/}
                              <div className="pl-5 md:pl-10 py-5 mb-16">
                            <h3 className="text-[19px] font-semibold my-6">Series</h3>
                            <MovieRow Movies={TvShow?.data?.results} type='Series' loading={TvShowLoading} size={{width:260,height:200}} />
                            </div>
                        </>
                    )
                }
            </div>

        </main>
    );
}
