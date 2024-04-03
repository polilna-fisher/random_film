export interface IFilm{
    id: number
    type: string
    name: string
    description: string
    poster: string | any
    genres: IGenre[] | null | undefined | any
    countries: ICountry[] | null | undefined | any
    rating: number | any
}

interface IGenre{
    name: string
}
interface ICountry{
    name: string
}
export interface InitialState{
    randomFilm: IFilm | null | undefined,
    loadingRandom: boolean,
    errorRandom: boolean,
    loadingFiltered: boolean,
    errorFiltered: boolean,
    loadingTop: boolean,
    errorTop: boolean,
    filteredFilm: IFilm | null | undefined,
    topFilms: IFilm[] | null | undefined,
    page:number,
    selectedFilmsList:Array<number> | [] | Array<any>
}

export interface IFilmsList{
    docs: IFilm[],
    total: number,
    limit: number,
    page: number,
    pages: number
}
export interface IFilters{
    type: number | undefined,
    year: number | null | undefined,
    genre: string | undefined,
    country: string
}
export interface ITopFilters{
    limit: number ,
    page: number ,
}