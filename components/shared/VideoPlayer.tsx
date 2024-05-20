import React from 'react'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { VideoType } from '@/constants/type';
import YouTube from 'react-youtube';
import { AspectRatio } from '../ui/aspect-ratio';

interface Props {
    id: string | number,
    type: "movie" | "tv" | string,
    IsCLose:boolean,
    HandleClose:()=>void
}

const VideoPlayer = ({ id, type,IsCLose,HandleClose}: Props) => {
    const baseUrl = 'https://api.themoviedb.org/3'
    const headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTc3NGUwMzcxM2EzOWFhZmM3ZDAxNGZlNTQ2ZDViZiIsInN1YiI6IjY0YjdhYmYzZWVlMTg2MDEzYTY1N2I1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qLbJ84DFt_LVBFESNprrO3RxWnfj55GcATnvwfjZTiU'
    }
    const { data: video } = useQuery({
        queryKey: ['video'],
        queryFn: () => axios.get(`${baseUrl}/${type}/${id}/videos?language=en-US`, { headers: headers }),
        gcTime: 0,
        staleTime: 0, // Always consider the data as stale
        refetchOnMount: true,
    })
    const VideoData: VideoType = video?.data?.results[0]
    console.log(VideoData)
    const opts = {
        height:"350px",
        width:"100%",
        playerVars: {
            autoplay: 1,
        },
    };
    return (
       <>
       {
        IsCLose &&   
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="relative bg-primary-500 rounded-lg shadow-lg w-full max-w-5xl p-10 h-[420px]">
        <button
          className="absolute top-2 right-2 text-white hover:text-white text-[15px]"
          onClick={HandleClose}
        >
          &times;
        </button>
        <YouTube videoId={VideoData?.key} opts={opts} onEnd={HandleClose} />
      </div>
      </div>
       }
       </>
    )
}

export default VideoPlayer