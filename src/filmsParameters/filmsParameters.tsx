import {FC, useEffect, useState} from "react";
import './filmsParameters.css'
import {useDispatch} from "react-redux";
import {filmsActions} from "../redux/slice";


const FilmsParameters:FC = () => {
    const [year, setYear] = useState()
    const [country, setCountry] = useState('')
    const [genre, setGenre] = useState('драма')
    const [type, setType] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filmsActions.fetchFilteredFilm({type: type, year: year, genre: genre, country: country}))
    },[])

    const loadFilmByParameters = () => {
        dispatch(filmsActions.fetchFilteredFilm({type: type, year: year, genre: genre, country: country}))
    }

    return(
        <div className='parameters_container'>
            <select name="type" id="type-select" className='parameters_select' onChange={(e) => {
                setType(():any => e.target.value)
            }}>
                {/*<option value="default" className='select_text'>Выберите тип фильма</option>*/}
                <option value="1" className='select_text'>Фильм</option>
                <option value="2" className='select_text'>Сериал</option>
                <option value="3" className='select_text'>Мультфильм</option>
                <option value="5" className='select_text'>Мультсериал</option>
                <option value="4" className='select_text'>Аниме</option>
            </select>
            <select name="genre" id="genre-select" className='parameters_select'  onChange={(e) => {
                setGenre(():any => e.target.value)
            }}>
                {/*<option value="default" className='select_text'>Выберите жанр</option>*/}
                <option value="драма" className='select_text'>Драма</option>
                <option value="комедия" className='select_text'>Комедия</option>
                <option value="мелодрама" className='select_text'>Мелодрама</option>
                <option value="ужасы" className='select_text'>Ужасы</option>
                <option value="боевик" className='select_text'>Боевик</option>
                <option value="триллер" className='select_text'>Триллер</option>
                <option value="фантастика" className='select_text'>Фантастика</option>
                <option value="вестерн" className='select_text'>Вестерн</option>
                <option value="военный" className='select_text'>Военный</option>
                <option value="детектив" className='select_text'>Детектив</option>
                <option value="детский" className='select_text'>Детский</option>
                <option value="для взрослых" className='select_text'>Для взрослых</option>
                <option value="биография" className='select_text'>Биография</option>
                <option value="документальный" className='select_text'>Документальный</option>
                <option value="история" className='select_text'>История</option>
                <option value="короткометражка" className='select_text'>Короткометражка</option>
                <option value="криминал" className='select_text'>Криминал</option>
                <option value="мюзикл" className='select_text'>Мюзикл</option>
                <option value="семейный" className='select_text'>Семейный</option>
                <option value="спорт" className='select_text'>Спорт</option>
                <option value="фентези" className='select_text'>Фентези</option>

            </select>
            <input type='text' placeholder='Введите год'
                   className='parameters_input' name='year' value={year}
                   onChange={(e) => {
                       setYear(():any => e.target.value)
                   }}/>
            <input type='text' placeholder='Введите страну'
                   className='parameters_input' name='country' value={country} onChange={(e) => {
                setCountry(():any => e.target.value)
            }}/>
            <button className='parameters_button' onClick={() => loadFilmByParameters()}>Подобрать</button>

        </div>
    )
}

export default FilmsParameters