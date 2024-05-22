import { SearchMovieType, getMovieGenre } from '@/constants/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    Movie: any,
    placeholderImage:string
}

const SearchCard = ({ Movie,placeholderImage }: Props) => {
    return (
        <div>
            <Link href={Movie.media_type === "movie" ? `/moviedetail/${Movie.id}`:`/tvseriesdetail/${Movie.id}`}>
            {
                 <div className='w-full md:w-[310px] h-[130px] relative rounded-lg my-4'
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${Movie.backdrop_path || Movie.poster_path || placeholderImage}) `,
                        backgroundSize: "cover"
                    }}>
                    <div className=' absolute z-10 inset-0 backdrop-blur-md rounded-lg h-full w-full' />
                    <div className=' absolute z-20 flex '>
                        <img src={`https://image.tmdb.org/t/p/original/${Movie.poster_path}`}
                            alt='' className='w-[100px] h-[130px] rounded-l-lg' />
                        <div className='my-3 px-2 h-full flex flex-col'>
                            <div>
                            <p className=' text-[14px] font-bold'>{Movie.original_title || Movie.original_name}</p>
                            <p className='text-[10px] font-light text-gray-200 '>
                                {Movie.genre_ids?.map((genre:any) => (
                                    <span className='mx-1'>
                                        {
                                            genre && <span>
                                                {
                                                    getMovieGenre(genre)
                                                }
                                            </span>
                                        }
                                    </span>
                                ))}
                            </p>
                            </div>
                            <div className='flex items-end mt-5 gap-3'>
                                 <div className='flex flex-col gap-1'>
                                 <span className='text-[13px] font-semibold'>{Movie?.vote_average}</span>
                                <span className='text-[10px] font-light'>Rating</span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                <span className='text-[13px] font-semibold text-green-600'>{Movie?.popularity}%</span>
                                <span className='text-[10px] font-light'>Popularity</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            }
            </Link>
        </div>
    )
}

export default SearchCard