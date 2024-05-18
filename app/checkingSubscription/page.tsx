"use client"
import { useUser } from '@clerk/nextjs'
import CheckSub from './checkSub'

const page = () => {
    const { user } = useUser();
    const userId = user?.publicMetadata.userId as string;
    return (<CheckSub id={userId}/>)
}

export default page