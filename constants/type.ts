

export interface getMovieType {
    adult: boolean,
    backdrop_path: string,
    genre_ids: any[]
    id: number
    first_air_date: string
    media_type: string
    original_language: string
    original_title: string
    original_name: string
    overview: string
    popularity: string
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export const genreId = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Animation", id: 16 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Family", id: 10751 },
    { name: "Fantasy", id: 14 },
    { name: "History", id: 36 },
    { name: "Horror", id: 27 },
    { name: "Music", id: 10402 },
    { name: "Mystery", id: 9648 },
    { name: "Romance", id: 10749 },
    { name: "Science Fiction", id: 878 },
    { name: "TV Movie", id: 10770 },
    { name: "Thriller", id: 53 },
    { name: "War", id: 10752 },
    { name: "Western", id: 37 }
]

export const getMovieGenre = (id: number) => {
    const item = genreId.find((genre) => genre.id === id)
    return item ? item.name : null
}

export const SignInDefaultValue = {
    email:"",
    password:""
}

export const SignUpDefaultValue = {
    email:"",
    password:"",
    confirmPassword:""
}

export interface CreateUserParam{
    clerkId:string,
    email:string,
    firstName:string | null,
    lastName:string | null,
    photo:string,
    Subscribed:string
}