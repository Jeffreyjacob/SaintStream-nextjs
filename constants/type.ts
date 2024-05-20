

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
    email: "",
    password: ""
}

export const SignUpDefaultValue = {
    email: "",
    password: "",
    confirmPassword: ""
}

export interface CreateUserParam {
    clerkId: string,
    email: string,
    firstName: string | null,
    lastName: string | null,
    photo: string,
}

export interface CreatePlanParam {
    plantype: string,
    Planprice: string,
}

export type CheckoutSubscribeParams = {
    planType: string
    planId: string
    price: string
    buyerId: string
}

export interface CreateSubscriberParams {
    stripeId: string
    planId: string
    buyerId: string
    totalAmount: string
    createdAt: Date
}
export type GetSubscribedUserParams = {
    _id: string,
    stripeId: string,
    totalAmount: string
    user: string
    plan: string
    createAt: string
}
export type SearchParamProps = {
    params: { id: string }
}


export type MovieDetailType = {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: {
        id: string,
        name: string,
        backdrop_path: string
    }
    budget: number
    genres: any[]
    homepage: string
    id: number
    imdb_id: string
    origin_country: []
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: any[]
    production_countries: any[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: any[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type TopCastType = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
}

export type ReviewsType = {
    author: string,
    author_details: {
        name: string,
        username: string,
        avatar_path: string | null,
        rating: number
    },
    content: string,
    created_at: string,
    id: string,
    updated_at: string,
    url: string
}

export type EpisodeType = {
    air_date: string
    crew: any[]
    episode_number: number
    episode_type: string
    guest_stars: any[]
    id: number
    name: string
    overview: string
    production_code: string
    runtime: number
    season_number: number
    show_id: number
    still_path: string
    vote_average: number
    vote_count: number
}

export type VideoType = {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string
}

