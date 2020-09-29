import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    checkBottons: [
        { title: 'Numbers', checked: true, id: v4() },
        { title: 'Letters', checked: false, id: v4() },
        { title: 'Symbols', checked: false, id: v4() },
        { title: 'Uppercase', checked: false, id: v4() },
        { title: 'Lowercase', checked: false, id: v4() },
    ],
    maxValue: 107,
    inputValue: 0,
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
    }
})


export const {
    setValueAC,
    setIsCheckedAC,
} = password.actions
export const passwordReducer = password.reducer