import {FC, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {filmsActions} from "../redux/slice";
import {useAppSelector} from "../redux/store";
import './randomFilm.css'
import StarIcon from '../img/star_icon3.png'
import {toStringFromList, translateType} from "../utils/utils";
import Question from '../img/question.jpeg'


const RandomFilm: FC = () => {
    const [time, setTime] = useState(Math.floor(Math.random() * 345))
    const [disabled, setDisabled] = useState(false)
    const dispatch = useDispatch()
    const randomData = useAppSelector(state => state.films.randomFilm)
    const loading = useAppSelector(state => state.films.loadingRandom)
    const error = useAppSelector(state => state.films.errorRandom)

    const addTheNumberOfVisitors = () => {
        setTime(time + 1)
        setDisabled(true)
    }

    useEffect(() => {
        setTime(Math.floor(Math.random() * 345))
        setDisabled(false)
    }, [randomData])

    useEffect(() => {
        dispatch(filmsActions.fetchRandomFilm())
    }, [])

    return (
        <div className='random_section'>
            <div className='random_container'>
                <img src={StarIcon} alt='icon' className='random_stars_icons' style={{left: 700, top: 321}}/>
                <img src={StarIcon} alt='icon' className='random_stars_icons' style={{left: 188, top: 69}}/>
                <img src={StarIcon} alt='icon' className='random_stars_icons' style={{left: 947, top: 64}}/>

                {
                    loading
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
                {
                    error
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
                {
                    (!loading && !error)
                        ? <>
                            <div className='random_container_inner_left'>
                                <p className='random_text'> Этот фильм был выбран {time} раз </p>
                                <button className='random_button'
                                        disabled={disabled}
                                        onClick={() => {
                                            randomData && addTheNumberOfVisitors();
                                            randomData && dispatch(filmsActions.toggleLocalStorage(
                                                {
                                                    id: randomData?.id, type: randomData?.type,
                                                    name: randomData?.name, description: randomData?.description,
                                                    poster: randomData?.poster, genres: randomData?.genres,
                                                    countries: randomData?.countries, rating: randomData?.rating
                                                }))
                                        }}> В избранное
                                </button>
                                <button className='random_button'
                                        onClick={() => dispatch(filmsActions.fetchRandomFilm())}> Поищу еще
                                </button>
                            </div>
                            <div className='random_container_inner_center'>
                                <div className='random_text'>
                    <span
                        className='random_text_bold'>Название: </span>
                                    {randomData?.name ? randomData?.name : 'Упс, мы не знаем название'}
                                </div>
                                <div className='random_text'>
                    <span
                        className='random_text_bold'>Тип: </span>
                                    {randomData?.type ? translateType(randomData?.type) : 'Упс, тип нам неизвестен'}
                                </div>
                                <div className='random_text'>
                    <span
                        className='random_text_bold'>Описание: </span>
                                    {randomData?.description ? randomData?.description : 'Упс, у нас нет описания, но вы всегда можете поделиться им с нами'}
                                </div>
                                <div className='random_text'>
                    <span
                        className='random_text_bold'>Жанр: </span>
                                    {randomData?.genres ? toStringFromList(randomData?.genres) : 'Упс, мы не знаем что это за жанр'}
                                </div>
                                <div
                                    className='random_text'>
                    <span
                        className='random_text_bold'>
                    Страна: </span>
                                    {randomData?.countries ? toStringFromList(randomData?.countries) : 'Упс, мы не знаем страну'}

                                </div>
                                <div
                                    className='random_text'>
                    <span
                        className='random_text_bold'>Рейтинг: </span>
                                    {randomData?.rating ? randomData?.rating : 'Упс, рейтинг нам неизвестен'}
                                </div>
                            </div>
                            <div className='random_container_inner_right'>
                                <img src={randomData?.poster ? randomData?.poster : Question} alt='poster'
                                     className='random_poster'/>
                            </div>

                        </>

                    : null

                }


            </div>
        </div>
    )
}

export default RandomFilm