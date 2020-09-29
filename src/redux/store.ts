import { passwordReducer } from './password-reducer';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
    passwordReducer
})

export type AppStateType = ReturnType<typeof reducers>;

const store = configureStore({
    reducer: reducers
})

export default store