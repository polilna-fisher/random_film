import {FC, useEffect, useState} from "react";
import './topFilms.css'
import {useDispatch} from "react-redux";
import {useAppSelector} from "../redux/store";
import {filmsActions} from "../redux/slice";
import FilmItem from "../filmItem/filmItem";

const TopFilms: FC = () => {
    const dispatch = useDispatch()
    const topList = useAppSelector(state => state.films.topFilms)
    const page = useAppSelector(state => state.films.page)
    const selectedList = useAppSelector(state => state.films.selectedFilmsList)
    const [listType, setListType] = useState('top250')

    useEffect(() => {
        dispatch(filmsActions.fetchTopFilms({limit: 10, page: page}))
    }, [])

    const loadOtherFilms = () => {
        const newPage = page + 1
        dispatch(filmsActions.changePage(newPage))
        dispatch(filmsActions.fetchTopFilms({limit: 10, page: newPage}))
    }
    useEffect(() => {
        dispatch(filmsActions.getItemsFromLocalStorage())
    }, [])


    return (
        <div className='top_film_section'>
            <div className='top_film_container'>
                <select name="list_name" id="list_name" className='top_film_select'
                        onChange={(e) => {
                            setListType((): any => e.target.value)
                        }}>
                    <option value="top250" className='top_film_option'>Топ 250 фильмов</option>
                    <option value="selected" className='top_film_option'>Избранные фильмы</option>
                </select>
                {
                    listType === 'top250'
                        ? topList?.map(item => {
                            return (
                                <FilmItem key={item.id}
                                          id={item.id}
                                          type={item.type}
                                          name={item.name}
                                          description={item.description}
                                          poster={item.poster}
                                          genres={item.genres}
                                          countries={item.countries}
                                          rating={item.rating}/>
                            )
                        })
                        : null
                }
                {
                    listType === 'selected'
                        ? selectedList?.map(item => {
                            return (
                                <FilmItem key={item.id}
                                          id={item.id}
                                          type={item.type}
                                          name={item.name}
                                          description={item.description}
                                          poster={item.poster}
                                          genres={item.genres}
                                          countries={item.countries}
                                          rating={item.rating}/>
                            )
                        })
                        : null
                }
                <button className='top_film_button' onClick={() => loadOtherFilms()}> Показать еще</button>
            </div>
        </div>
    )
}

export default TopFilms