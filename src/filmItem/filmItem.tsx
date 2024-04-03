import {IFilm} from "../types/types";
import {useDispatch} from "react-redux";
import Question from "../img/question.jpeg";
import {toStringFromList, translateType} from "../utils/utils";
import {FC} from "react";
import {useAppSelector} from "../redux/store";
import FavouriteIcon from "../img/favourite.png";
import UnfavouriteIcon from "../img/unfavourite.png";
import {filmsActions} from "../redux/slice";
import './filmItem.css'

const FilmItem:FC<IFilm> = ({id, type, name, description, poster, genres, countries, rating}) => {
    const dispatch = useDispatch()
    const selectedList:Array<any> = useAppSelector(state => state.films.selectedFilmsList)

    return(
        <div className='top_film_item' key={id}>
            <img src={poster ? poster : Question} alt='poster' className='top_film_icon'/>
            <div className='top_film_info'>
                <div className='top_film_text'>
                        <span
                            className='top_film_text_bold'>Название: </span>
                    {name ? name : 'Упс, мы не знаем название'}
                </div>
                <div className='top_film_text'>
                        <span
                            className='top_film_text_bold'>Тип: </span>
                    {type ? translateType(type) : 'Упс, тип нам неизвестен'}
                </div>
                <div className='top_film_text'>
                        <span
                            className='top_film_text_bold'>Описание: </span>
                    {description ? description : 'Упс, у нас нет описания, но вы всегда можете поделиться им с нами'}
                </div>
                <div className='top_film_text'>
                        <span
                            className='top_film_text_bold'>Жанр: </span>
                    {genres ? toStringFromList(genres) : 'Упс, мы не знаем что это за жанр'}
                </div>
                <div
                    className='top_film_text'>
                        <span
                            className='top_film_text_bold'>
                            Страна: </span>
                    {countries ? toStringFromList(countries) : 'Упс, мы не знаем страну'}

                </div>
                <div
                    className='top_film_text'>
                        <span
                            className='top_film_text_bold'>Рейтинг: </span>
                    {rating ? rating : 'Упс, рейтинг нам неизвестен'}
                </div>
            </div>
            <img className='list_favourite_icon'
                 alt='star'
                 src={selectedList.find(el => el.id === id) ? FavouriteIcon : UnfavouriteIcon}
                 onClick={() => dispatch(filmsActions.toggleLocalStorage(
                     {id: id, type:type, name:name, description:description, poster:poster,
                         genres:genres, countries:countries, rating:rating}))}
            />
        </div>
    )
}

export default FilmItem