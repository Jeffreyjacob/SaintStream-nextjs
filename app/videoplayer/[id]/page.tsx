import { SearchParamProps } from "@/constants/type"


const page = ({ params: { id } }: SearchParamProps) => {
  return (
    <div className=" bg-primary-500 flex min-h-screen items-center justify-center">
        <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player" 
        className='w-full md:h-[420px] h-[400px]'
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
    </div>
  )
}

export default page