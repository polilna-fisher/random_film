import {IFilm, IFilmsList, IFilters, ITopFilters} from "../types/types";
import {notNullFieldsURL, prepareData, selectedFieldsURL} from "../utils/utils";

const apiKey = 'X'
const headerAccept = 'application/json'
const baseURL = 'https://api.kinopoisk.dev/v1.4/'
const selectedFields:Array<string> = ['id', 'name', 'description', 'rating', 'genres', 'countries', 'poster']
const notNullFields:Array<string> = ['name', 'id', 'description', 'rating.imdb', 'poster.url', 'genres.name', 'countries.name']


export const getRandomTitle = async ():Promise<IFilm> => {
    const response = await fetch(`${baseURL}movie/random?rating.kp=8&rating.kp=9&rating.kp=10&rating.kp=7`,{
        method: 'GET',
        headers:{
            'X-API-KEY': apiKey,
            'accept': headerAccept
        }
    })
    const data = await response.json()

    return prepareData(data)
}

export const getFilteredTitle = async({type, year, genre, country}:IFilters):Promise<IFilm> => {
    const response = await fetch(`${baseURL}movie/random?&
    ${selectedFieldsURL(selectedFields)}${notNullFieldsURL(notNullFields)}&typeNumber=
    ${type}&year=${year}&genres.name=${genre}&countries.name=${country}`,{
        method: 'GET',
        headers:{
            'X-API-KEY': apiKey,
            'accept': headerAccept
        }
    })
    const data = await response.json()
    return prepareData(data)
}
export const getTopList = async({limit, page}:ITopFilters):Promise<Array<IFilm>> => {
    const response = await fetch(`${baseURL}movie?page=${page}&limit=${limit}&lists=top250`,{
        method: 'GET',
        headers:{
            'X-API-KEY': apiKey,
            'accept': headerAccept
        }
    })
    const data:IFilmsList = await response.json()
    const preparedData:Array<IFilm> = data?.docs?.map(item => {
            return prepareData(item)
    })
    console.log(preparedData, 'filtered')
    return preparedData
}


