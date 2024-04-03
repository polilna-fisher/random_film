import {IFilm} from "../types/types";

export const selectedFieldsURL = (fields: Array<string>): string => {
    let fieldsString: string = ''
    fields.forEach(field => {
        fieldsString = fieldsString + 'selectFields=' + field + '&'
    })
    return fieldsString
}
export const notNullFieldsURL = (fields: Array<string>): string => {
    let fieldsString: string = ''
    fields.forEach(field => {
        fieldsString = fieldsString + 'notNullFields=' + field + '&'
    })
    return fieldsString
}
export const prepareData = (dataItem:IFilm): IFilm => {
    return {
        id: dataItem.id,
        type: dataItem.type,
        name: dataItem.name,
        description: dataItem.description,
        poster: dataItem.poster.url,
        genres: dataItem.genres,
        countries: dataItem.countries,
        rating: dataItem.rating.imdb
    }
}
export const toStringFromList = (list:Array<any>|undefined):string => {
    let finalString = ''
    list?.map(item => {
        return finalString = finalString ? finalString + ', ' + item?.name : item?.name
    })
    return finalString
}

export const translateType = (typeName:string):string | any => {
    const types: {[key: string]: string} = {'movie': 'Фильм', 'tv-series': 'Сериал',
        'anime': 'Аниме', 'cartoon': 'Мультфильм', 'animated-series': 'Мультсериал'}
    if(types[typeName]){
        return types[typeName]
    } else{
        return typeName
    }
}