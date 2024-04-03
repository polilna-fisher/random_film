import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilm, IFilters, InitialState, ITopFilters} from "../types/types";

const initialState: InitialState = {
    loading: true,
    error: false,
    randomFilm: null,
    filteredFilm: null,
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
                state.loading = true;
                state.error = false
            },
            fetchRandomFilmSuccess: (state, action) => {
                state.loading = false;
                state.error = false;
                state.randomFilm = action.payload
            },
            fetchFilmError: (state) => {
                state.loading = false;
                state.error = true
            },
            fetchFilteredFilm: (state, _action:PayloadAction<IFilters>) => {
                state.loading = true;
                state.error = false
            },
            fetchFilteredFilmSuccess: (state, action) => {
                state.loading = false;
                state.error = false;
                state.filteredFilm = action.payload
            },
            fetchTopFilms: (state, _action:PayloadAction<ITopFilters>) => {
                state.loading = true;
                state.error = false
            },
            fetchTopFilmsSuccess: (state, action) => {
                state.loading = false;
                state.error = false;
                state.topFilms = state.topFilms ? [...state.topFilms, ...action.payload] : action.payload
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