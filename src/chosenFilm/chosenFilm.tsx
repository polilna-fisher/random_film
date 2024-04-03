import {FC} from "react";
import FilmsList from "../filmsList/filmsList";
import FilmsParameters from "../filmsParameters/filmsParameters";
import './chosenFilm.css'


const ChosenFilm:FC = () => {
    return(
        <div className='chosen_section'>
            <div className='chosen_container'>
                <FilmsList/>
                <FilmsParameters/>
            </div>
        </div>
    )
}

export default ChosenFilm