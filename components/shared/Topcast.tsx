import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { TopCastType } from '@/constants/type';
import Image from 'next/image';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

interface Props {
    movieData: TopCastType[],
    loading: boolean
}

const Topcast = ({ movieData, loading }: Props) => {
    return (
        <div>
            <Swiper
                slidesPerView="auto"
                spaceBetween={18}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {
                    movieData?.slice(0, 10).map((cast) => (
                        <SwiperSlide key={cast.id}
                            style={{ width: "162px", height: "65px" }}>
                            <div className='flex gap-3 items-center'>
                                <div>
                                    <Avatar>
                                        <AvatarImage src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt="@shadcn"
                                        className='w-[50px] h-[50px]' />
                                        <AvatarFallback>C</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div>
                                    <p className='text-[14px] font-semibold flex-nowrap line-clamp-1'>{cast.name}</p>
                                    <span className='text-[10px] text-[#9CA4AB]'>{cast.character}</span>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Topcast