"use client"
import Loader from '@/components/shared/Loader'
import {  useToast } from '@/components/ui/use-toast'
import { GetSubscribedUser } from '@/lib/actions/subscribe.action'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const CheckSub = ({id}:{id:string}) => {
     const router = useRouter()
     const { toast } = useToast()
    useEffect(()=>{
            const checkSubription = async()=>{
              console.log(id)
                try{
                   setTimeout(async()=>{
                    await GetSubscribedUser(id).then(
                        res =>{
                            if(res.message === "User is already subscribed"){
                                router.push("/")
                             }else{
                               router.push('/verifySubscription')
                             }
                        }
                       )
                   },3000)
                }catch(error){
                  toast({
                    title:"Something went wrong",
                    description:"Please check your internet"
                  })
                }
              }
        checkSubription()
    },[id,router,toast])

    
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-primary-500'>
            <Loader message='Please wait..' />
        </div>
  )
}

export default CheckSub