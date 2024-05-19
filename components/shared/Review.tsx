import { ReviewsType } from '@/constants/type';
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Star } from 'lucide-react';


interface props {
    Reviews: ReviewsType[],
    loading: boolean
}

const Review = ({ Reviews, loading }: props) => {
    console.log(Reviews)
    return (
        <div>
            <div className='text-[18px] font-bold'>
                Reviews
            </div>
            <div>
                {
                    Reviews.length > 0 ? (
                        <ScrollArea className='h-[300px] w-full mt-10'>
                            {
                                Reviews.map((review) => (
                                    <div key={review.id} className='flex flex-col border-y-[1px] border-[#4d4d4d] py-5'>
                                        <p className='text-[10px] text-gray-400 my-3'>{review.content}</p>
                                        <div className='flex gap-3 items-center'>
                                            <Avatar>
                                                <AvatarImage src={`https://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`} alt="@shadcn"
                                                    className='w-[50px] h-[50px]' />
                                                <AvatarFallback>R</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <span className='text-[13px] font-semibold'>{review.author_details.name || review.author_details.username}</span>
                                                <div className='text-white flex flex-row items-center'>
                                                    <span className='text-[10px] text-gray-400 mr-2 items-center'>
                                                        Movie rating
                                                    </span>
                                                    <div className='flex flex-row items-center'>
                                                        <Star className='w-4 h-4 text-yellow-500' />
                                                        <span className='text-[14px] ml-1'>{review.author_details.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </ScrollArea>
                    ) : (
                        <div className='flex justify-center items-center w-full h-[250px] text-gray-400'>
                            No Review
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Review