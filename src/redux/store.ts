import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import reducer from './slice';
import createSagaMiddleware from 'redux-saga'
import {filmCurrentWatcher} from "./saga";


const saga = createSagaMiddleware()
const store = configureStore({
    reducer: {
        films: reducer
    },middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),

})
saga.run(filmCurrentWatcher)


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default store