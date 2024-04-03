import {takeLatest, put, call} from 'redux-saga/effects'
import {filmsActions} from "./slice";
// import {forecastActions} from "../slice";
import {IFilm} from "../types/types";
import {PayloadAction} from "@reduxjs/toolkit";
import {getFilteredTitle, getRandomTitle, getTopList} from "../services/apiService";
//
export function* getRandomFilmSaga() {
    try {
        const payload:IFilm = yield call(getRandomTitle)
        yield put(filmsActions.fetchRandomFilmSuccess(payload))
    }catch (e){
        yield put(filmsActions.fetchRandomFilmError())
    }

}
export function* getFilteredFilm(action: PayloadAction<any>):Generator<any>{
    try {
        const payload:any = yield call(getFilteredTitle, action.payload)
        yield put(filmsActions.fetchFilteredFilmSuccess(payload))
    }catch (e){
        yield put(filmsActions.fetchFilteredFilmError())
    }
}

export function* getTopFilms(action: PayloadAction<any>):Generator<any>{
    try {
        const payload:any = yield call(getTopList, action.payload)
        yield put(filmsActions.fetchTopFilmsSuccess(payload))
    }catch (e){
        yield put(filmsActions.fetchTopFilmError())
    }
}

export function* filmCurrentWatcher(): Generator<any>{
    yield takeLatest(filmsActions.fetchRandomFilm, getRandomFilmSaga)
    yield takeLatest(filmsActions.fetchFilteredFilm, getFilteredFilm)
    yield takeLatest(filmsActions.fetchTopFilms, getTopFilms)
}
