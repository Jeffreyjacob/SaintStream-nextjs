"use client"

import SearchCard from '@/components/shared/SearchCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchMovieType, SearchParamProps } from '@/constants/type'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ChevronLeft, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = ({ params: { id } }: SearchParamProps) => {
  const router = useRouter()
  const [SearchData, setSearchData] = useState<any[]>([])
  const [searchValue, setSearchValue] = useState(id)
  const [loading, setLoading] = useState<boolean>(false);
  const baseUrl = 'https://api.themoviedb.org/3'
  const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTc3NGUwMzcxM2EzOWFhZmM3ZDAxNGZlNTQ2ZDViZiIsInN1YiI6IjY0YjdhYmYzZWVlMTg2MDEzYTY1N2I1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qLbJ84DFt_LVBFESNprrO3RxWnfj55GcATnvwfjZTiU'
  }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const Data = await axios.get(`${baseUrl}/search/multi?query=${searchValue}&include_adult=false&language=en-US&page=1`, { headers: headers })
      const newData = Data?.data?.results.filter( (item:any) => item.media_type !== "person")
      setSearchData(newData)
      setLoading(false)
    }
    fetchData()
  }, [id, searchValue])
  console.log(SearchData)
  return (
    <div className='w-full min-h-screen bg-primary-500 text-white'>
      <div className='wrapper'>
        <div className=' flex justify-between items-center mt-5 gap-6 md:gap-10'>
          <Button onClick={() => router.back()}>
            <ChevronLeft className='w-4 h-4 text-white' />
          </Button>
          <div className='flex-1'>
            <Input type='text' placeholder='Search'
              className='w-full md:w-[70vw] border-none bg-primaryHover-500 h-[60px] px-5 rounded-xl' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          </div>
        </div>
        <div>
          {
            loading ? (
              <div className='flex flex-col h-[calc(90vh-64px-5px)]  w-full justify-center items-center'>
                <div className='w-[120px] h-[120px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#00925D" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
                </div>
                <div className='mt-4 '>
                  <p className='text-[15px] text-center text-white'>Loading...</p>
                </div>
              </div>
            ) : (<div>
              {
                SearchData.length > 0 ? (
                  <div className='md:mx-5 mx-5 mt-8 grid grid-cols-1 md:grid-cols-2'>
                    {
                      SearchData?.map((movie) => (
                        <div key={movie.id}>
                          <SearchCard Movie={movie}  placeholderImage={SearchData[0]?.backdrop_path}/>
                        </div>
                      ))
                    }
                  </div>
                ) : (
                 <div className='flex w-full h-[78vh] items-center justify-center'>
                   <p className='text-[13px] text-gray-500'>No Search Result</p>
                 </div>
                )
              }
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default page