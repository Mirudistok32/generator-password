import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export type CheckBottonsType = {
    title: string
    checked: boolean
    id: string
}


const initialState = {
    checkBottons: [
        { title: 'Numbers', checked: true, id: v4() },
        { title: 'Letters', checked: false, id: v4() },
        { title: 'Symbols', checked: false, id: v4() },
        { title: 'Uppercase', checked: false, id: v4() },
        { title: 'Lowercase', checked: false, id: v4() },
    ] as Array<CheckBottonsType>,
    maxValue: 107,
    inputValue: 0,
    password: '' as number | string
}

const password = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setValueAC(state, { payload }: PayloadAction<number>) {
            state.inputValue = payload
        },
        setIsCheckedAC(state, { payload }: PayloadAction<{ isChecked: boolean, id: string }>) {
            const elem = state.checkBottons.find(i => i.id === payload.id)
            if (elem) {
                elem.checked = payload.isChecked
            }
        },
        setPasswordAC(state, { payload }: PayloadAction<number | string>) {
            state.password = payload
        },
    }
})


export const {
    setValueAC,
    setIsCheckedAC,
    setPasswordAC,
} = password.actions
export const passwordReducer = password.reducer