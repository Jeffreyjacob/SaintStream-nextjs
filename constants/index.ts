import {Tv2} from 'lucide-react'

export const HeaderLink = [
    {name:"Home",path:"/"},
    {name:"Discover",path:"/dicover"},
    {name:"Movie Release",path:"/movieRelease"},
    {name:"Forum",path:"/forum"},
    {name:"About",path:"/about"}
]

export const StreamingPlatformLogo = [
    {name:"Netflix",imgUrl:"https://logos-world.net/imageup/TV_streaming_service_logos/Netflix%20Logo.png"},
    {name:"Paramount",imgUrl:"https://logos-world.net/imageup/TV_streaming_service_logos/Paramount%20Plus%20Logo.png"},
    {name:"Hulu",imgUrl:"https://logos-world.net/imageup/TV_streaming_service_logos/Hulu%20Logo.png"},
    {name:"Disney",imgUrl:"https://logos-world.net/imageup/TV_streaming_service_logos/Disney+%20Logo.png"},
    {name:"Prime",imgUrl:"https://logos-world.net/imageup/TV_streaming_service_logos/Amazon%20Prime%20Video%20Logo.png"},
    {name:"Sky",imgUrl:"https://logos-world.net/imageup/TV_streaming_service_logos/Sky%20Logo.png"}
]


export const Plans = [
    {
      Basic: "No",
      Standard: "Yes",
      Premium: "Yes",
      Detail:{
        icons:Tv2,
         description:"HD available"
      }
    },
    {
      Basic: "No",
      Standard: "No",
      Premium: "Yes",
      Detail:{
         description:"4k + HD available"
      }
    },
    {
      Basic: "Yes",
      Standard: "Yes",
      Premium: "Yes",
      Detail:{
        icons:"",
         description:"Watch on your laptop and Tv"
      }
    },
    {
      Basic: "Yes",
      Standard: "Yes",
      Premium: "Yes",
      Detail:{
        icons:"",
         description:"Watch on your mobile phone and tablet "
      }
    },
    {
      Basic: "1",
      Standard: "2",
      Premium: "4",
      Detail:{
        icons:"",
         description:"Screens you can watch on at the same time"
      }
    },
  ]