import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilm, IFilters, InitialState, ITopFilters} from "../types/types";

const initialState: InitialState = {
    loadingRandom: true,
    errorRandom: false,
    randomFilm: null,
    loadingFiltered: true,
    errorFiltered: false,
    filteredFilm: null,
    loadingTop: true,
    errorTop: false,
    topFilms: null,
    page: 1,
    selectedFilmsList: []
}

export const filmsSlice = createSlice(
    {
        name: 'films',
        initialState,
        reducers: {
            fetchRandomFilm: (state) => {
                state.loadingRandom = true;
                state.errorRandom = false
            },
            fetchRandomFilmSuccess: (state, action) => {
                state.loadingRandom = false;
                state.errorRandom = false;
                state.randomFilm = action.payload
            },
            fetchRandomFilmError: (state) => {
                state.loadingRandom = false;
                state.errorRandom = true
            },
            fetchFilteredFilm: (state, _action:PayloadAction<IFilters>) => {
                state.loadingFiltered = true;
                state.errorFiltered = false
            },
            fetchFilteredFilmSuccess: (state, action) => {
                state.loadingFiltered = false;
                state.errorFiltered = false;
                state.filteredFilm = action.payload
            },
            fetchFilteredFilmError: (state) => {
                state.loadingFiltered = false;
                state.errorFiltered = true
            },
            fetchTopFilms: (state, _action:PayloadAction<ITopFilters>) => {
                state.loadingTop = true;
                state.errorTop = false
            },
            fetchTopFilmsSuccess: (state, action) => {
                state.loadingTop = false;
                state.errorTop = false;
                state.topFilms = state.topFilms ? [...state.topFilms, ...action.payload] : action.payload
            },
            fetchTopFilmError: (state) => {
                state.loadingTop = false;
                state.errorTop = true
            },
            changePage: (state, action) => {
                state.page = action.payload
            },
            toggleLocalStorage: (state, action)=> {
                let list:Array<IFilm> = JSON.parse(localStorage.getItem('selectedItems') || '[]')
                const inList = list?.find(item => item.id === action.payload.id)
                if (inList) {
                    list = list.filter((el: IFilm) => el.id !== action.payload.id)
                } else {
                    list.push(action.payload)
                }
                localStorage.setItem('selectedItems', JSON.stringify(list))
                state.selectedFilmsList = list
            },
            getItemsFromLocalStorage: (state) => {
                let list:Array<IFilm> = JSON.parse(localStorage.getItem('selectedItems') || '[]')
                state.selectedFilmsList = list
            }

        }
    }
)


export default filmsSlice.reducer

export const filmsActions = filmsSlice.actions