"use client"
import Hero from "@/components/shared/Hero";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import axois from 'axios'
import { StreamingPlatformLogo } from "@/constants";
import Loader from "@/components/shared/Loader";
import MovieRow from "@/components/shared/MovieRow";
import axios from "axios";

export default function Home() {
  const baseUrl = 'https://api.themoviedb.org/3'
  const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTc3NGUwMzcxM2EzOWFhZmM3ZDAxNGZlNTQ2ZDViZiIsInN1YiI6IjY0YjdhYmYzZWVlMTg2MDEzYTY1N2I1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qLbJ84DFt_LVBFESNprrO3RxWnfj55GcATnvwfjZTiU'
  }
  const { data: TrendingMovies, isLoading } = useQuery({
    queryKey: ['Trending'],
    queryFn: () => axois.get(`${baseUrl}/trending/all/day?language=en-US`, {headers: headers})
  })
  const {data:JustReleaseMovie,isLoading:JustReleaseLoading} = useQuery({
    queryKey:['JustRelease'],
    queryFn:()=> axios.get(`${baseUrl}/movie/now_playing?language=en-US&page=1&region=US`,{headers:headers})
  })
  return (
    <main className=" bg-primary-500 text-white min-h-screen">
      <div>
          {
            isLoading ? <Loader/>:(
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
              <div className="pl-5 md:pl-10 py-5  mt-6 ">

              <MovieRow Movies={JustReleaseMovie?.data?.results} loading={JustReleaseLoading}
              size={{width:200,height:260}} type="Movie"/>
              </div>
              </>
            )
          }
      </div>
     
    </main>
  );
}
