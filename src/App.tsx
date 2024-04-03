import './App.css';
import {FC} from "react";
import Header from "./header/header";
import RandomFilm from "./randomFilm/randomFilm";
import ChosenFilm from "./chosenFilm/chosenFilm";
import TopFilms from './topFilms/topFilms'

const App: FC = () => {

    return (
        <div className="App">
            <Header/>
            <RandomFilm/>
            <ChosenFilm/>
            <TopFilms/>
        </div>

    );
}

export default App;
