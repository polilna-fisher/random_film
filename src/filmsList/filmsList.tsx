import {FC} from "react";
import {useAppSelector} from "../redux/store";
import {IFilm} from "../types/types";
import './filmList.css'
import StarIcon from '../img/star_icon3.png'
import StarBigIcon from '../img/star_icon2.png'
import {toStringFromList} from "../utils/utils";
import Question from '../img/question.jpeg'
import {filmsActions} from "../redux/slice";
import {useDispatch} from "react-redux";


const FilmsList: FC = () => {
    const filteredFilm: IFilm | null | undefined = useAppSelector(state => state.films.filteredFilm)
    const dispatch = useDispatch()
    const loading = useAppSelector(state => state.films.loadingFiltered)
    const error = useAppSelector(state => state.films.errorFiltered)

    return (
        <>
            <div className='film_container_common'>
                <img src={StarIcon} alt='icon' className='film_stars_icons' style={{left: 1027, top: -30}}/>
                <img src={StarIcon} alt='icon' className='film_stars_icons' style={{left: 538, top: 232}}/>
                <img src={StarIcon} alt='icon' className='film_stars_icons' style={{left: 969, top: 460}}/>
                <img src={StarIcon} alt='icon' className='film_stars_icons' style={{left: 1242, top: 435}}/>
                <img src={StarBigIcon} alt='icon' className='film_stars_icons_big' style={{left: 357, top: -89}}/>
                    {loading
                        ? <div className='random_loading_container'>
                            <h3 className='random_loading_text'>Loading</h3>
                            <img alt='loading' src={StarIcon} className='random_loading_icon'
                                 style={{top: 196, right: -28}}/>
                            <img alt='loading' src={StarIcon} className='random_loading_icon'
                                 style={{top: 196, right: -48}}/>
                            <img alt='loading' src={StarIcon} className='random_loading_icon'
                                 style={{top: 196, right: -68}}/>
                        </div>
                        : null
                    }
                    {error
                        ? <div className='random_loading_container'>
                            <h3 className='random_loading_text'>Error</h3>
                            <img alt='loading' src={StarIcon} className='random_loading_icon'
                                 style={{top: 196, right: -30}}/>
                            <img alt='loading' src={StarIcon} className='random_loading_icon'
                                 style={{top: 167, right: -30}}/>
                            <img alt='loading' src={StarIcon} className='random_loading_icon'
                                 style={{top: 149, right: -30}}/>
                            <img alt='loading' src={StarIcon} className='random_loading_icon'
                                 style={{top: 132, right: -30}}/>
                        </div>
                        : null
                    }
                    {(!loading && !error)
                        ? <>
                            <div className='film_parameters_container'>
                            <div className='film_text'>
                            <span className='film_text_bold'>Название: </span>
                            {filteredFilm?.name ? filteredFilm?.name : 'Упс, мы не знаем название'}
                        </div>
                        <div className='film_text'>
                            <span className='film_text_bold'>Описание: </span>
                            {filteredFilm?.description ? filteredFilm?.description : 'Упс, у нас нет описания, но вы всегда можете поделиться им с нами'}
                        </div>
                        <div className='film_text'>
                            <span className='film_text_bold'>Жанр: </span>
                            {filteredFilm?.genres ? toStringFromList(filteredFilm?.genres) : 'Упс, мы не знаем что это за жанр'}
                        </div>
                        <div
                            className='film_text'>
                            <span className='film_text_bold'>Страна: </span>
                            {filteredFilm?.countries ? toStringFromList(filteredFilm?.countries) : 'Упс, мы не знаем страну'}
                        </div>
                        <div className='film_text'>
                            <span className='film_text_bold'>Рейтинг: </span>
                            {filteredFilm?.rating ? filteredFilm?.rating : 'Упс, рейтинг нам неизвестен'}
                        </div>
                        <button onClick={() => {
                            filteredFilm && dispatch(filmsActions.toggleLocalStorage(
                                {
                                    id: filteredFilm?.id, type: filteredFilm?.type,
                                    name: filteredFilm?.name, description: filteredFilm?.description,
                                    poster: filteredFilm?.poster, genres: filteredFilm?.genres,
                                    countries: filteredFilm?.countries, rating: filteredFilm?.rating
                                }))
                        }} className='film_button'>В избранное </button>
                        </div>
                        <div className='film_poster_container'>
                            <img src={filteredFilm?.poster ? filteredFilm?.poster : Question} alt='poster' className='film_poster'/>
                        </div>
                        </>

                        : null

                    }
            </div>
        </>
    )
}


export default FilmsList