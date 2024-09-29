export interface RootInterface {
  docs: Movie[]
  total: number
  limit: number
  page: number
  pages: number
}

export interface Movie {
  id: number
  name: string
  alternativeName: string
  enName: string
  type: string
  year: number
  description: string
  shortDescription: string
  movieLength: number
  isSeries: boolean
  ticketsOnSale: boolean
  totalSeriesLength?: any
  seriesLength?: any
  ratingMpaa: string
  ageRating: number
  top10?: any
  top250?: any
  typeNumber: number
  status?: any
  names: Name[]
  externalId: ExternalId
  logo: Logo
  poster: Poster
  backdrop: Poster
  rating: Rating
  votes: Votes
  genres: Genre[]
  countries: Genre[]
  releaseYears: any[]
}

export interface Genre {
  name: string
}

export interface Votes {
  kp: number
  imdb: number
  filmCritics: number
  russianFilmCritics: number
  await: number
}

export interface Rating {
  kp: number
  imdb: number
  filmCritics: number
  russianFilmCritics: number
  await?: any
}

export interface Poster {
  url: string
  previewUrl: string
}

export interface Logo {
  url: string
}

export interface ExternalId {
  imdb: string
  tmdb: number
  kpHD: string
}

export interface Name {
  name: string
  language?: string
  type?: string
}
