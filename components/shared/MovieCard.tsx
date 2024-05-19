import { getMovieGenre, getMovieType } from '@/constants/type';
import React, { ReactNode } from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import { PlayCircleIcon, Star } from 'lucide-react';
import Link from 'next/link';
import { SignedIn, useUser } from '@clerk/nextjs';
import { SignedOut } from '@clerk/clerk-react';

interface Props {
  Movie: getMovieType,
  size: {
    width: number,
    height: number
  },
  type: "Movie" | "Series"
}

const MovieCard = ({ Movie, size, type }: Props) => {
  return (
    <AspectRatio
      ratio={size.width / size.height}
      className=' relative bg-center bg-cover rounded-xl'
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${Movie.poster_path})` }}>
      <div className='absolute z-10 inset-0 w-full flex flex-col justify-end pointer-events-none'>
        <div className='h-1/3 bg-gradient-to-t from-black/100 to-transparent rounded-xl' />
      </div>
      <div className='absolute z-20 inset-0 w-full flex flex-col justify-end pointer-events-none mx-4 gap-3'>
        <div className=' flex flex-col  h-1/3 justify-start'>
          <p className='text-[14px] w-[150px]'>
            {Movie.original_name || Movie.original_title}
          </p>
          <div className='flex gap-1 text-[12px]'>
            <div className='flex items-center gap-1'>
              <Star className='w-3 h-3 text-yellow-600' />
              <span>{Movie.vote_average}</span>{" "}|
            </div>
            <span className='flex flex-row gap-1 w-fit mr-5 flex-wrap'>
              {
                Movie.genre_ids.map((genre) =>
                (
                  <span className='text-[10px]'>
                    {getMovieGenre(genre)}
                  </span>
                ))
              }
            </span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:backdrop-blur-sm hover:opacity-100 rounded-xl">
        <SignedIn>
        <Link href={type === "Movie" ? `/moviedetail/${Movie.id}` : `/tvseriesdetail/${Movie.id}`}>
          <PlayCircleIcon className='w-14 h-14 text-primaryGreen-500'/>
        </Link>
        </SignedIn>
        <SignedOut>
        <Link href={type === "Movie" ? "/sign-in" : "/sign-in"}>
          <PlayCircleIcon className='w-14 h-14 text-primaryGreen-500'/>
        </Link>
        </SignedOut>
      </div>

    </AspectRatio>
  )
}

export default MovieCard