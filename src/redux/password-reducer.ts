import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    maxValue: 107,
    inputValue: 0,
    isNumbersCheck: true,
    isSymbolsCheck: false,
    isLettersCheck: false,
    isUppercaseCheck: false,
    isLowercaseCheck: false
}

const password = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setValueAC(state, { payload }: PayloadAction<number>) {
            state.inputValue = payload
        },
        setIsNumbersCheckAC(state, { payload }: PayloadAction<{ isNumber: boolean }>) {
            state.isNumbersCheck = payload.isNumber
        },
        setIsSymbolsCheckAC(state, { payload }: PayloadAction<{ isSymbol: boolean }>) {
            state.isSymbolsCheck = payload.isSymbol
        },
        setIsLettersCheckAC(state, { payload }: PayloadAction<{ isLetter: boolean }>) {
            state.isLettersCheck = payload.isLetter
        },
        setIsUppercaseCheckAC(state, { payload }: PayloadAction<{ isUppercase: boolean }>) {
            state.isUppercaseCheck = payload.isUppercase
        },
        setIsLowercaseCheckAC(state, { payload }: PayloadAction<{ isLowercase: boolean }>) {
            state.isLowercaseCheck = payload.isLowercase
        },
    }
})


export const {
    setIsLettersCheckAC,
    setIsLowercaseCheckAC,
    setIsNumbersCheckAC,
    setIsSymbolsCheckAC,
    setIsUppercaseCheckAC,
    setValueAC
} = password.actions
export const passwordReducer = password.reducer