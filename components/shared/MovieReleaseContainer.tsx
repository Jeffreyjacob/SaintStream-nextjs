import { Month } from '@/constants';
import { getMovieType } from '@/constants/type';
import React from 'react';
import moment from 'moment'
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';

interface Props {
    Movie: getMovieType[]
}

const MovieReleaseContainer = ({ Movie }: Props) => {
    console.log(Movie)
    const currentMonth = new Date().getMonth()

    const monthsFromCurrent = [
        ...Month.slice(currentMonth),
        ...Month.slice(0, currentMonth)
    ]
    return (
        <div>
            {
                monthsFromCurrent.slice(0, 3).map((newmonth) =>{
                const monthByMovie = Movie.filter((release)=> {
                    const movieMonth = moment(release.release_date).format('MMMM');
                    return movieMonth === newmonth.name;
                })
                    return(
                         <div>
                            <h3 className='text-[18px] font-semibold mt-4'>{newmonth.name}</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                {
                                    monthByMovie.map((newMovie)=>(
                                        <div className=' my-5'>
                                            <Link href={`/moviedetail/${newMovie.id}`}>
                                            <div className='flex gap-3 items-center transition duration-300 transform hover:scale-110'>
                                              <div className='bg-white text-black p-4 rounded-full  font-semibold w-fit h-fit'>
                                                {moment(newMovie.release_date).format("DD")}
                                              </div>
                                              <div>
                                                <Avatar className='w-16 h-16'>
                                                <AvatarImage src={`https://image.tmdb.org/t/p/original/${newMovie.poster_path}`} className=' object-cover'/>
                                                <AvatarFallback>M</AvatarFallback>
                                                </Avatar>
                                              </div>
                                              <div>
                                                <p className='text-[16px] font-bold'>{newMovie.original_title}</p>
                                              </div>
                                            </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })
        }
        </div>
    )
}

export default MovieReleaseContainer