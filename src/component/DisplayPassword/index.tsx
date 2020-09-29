import React, { ChangeEvent, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setValueAC } from '../../redux/password-reducer'
import { AppStateType } from '../../redux/store'
import { Button } from '../Button'
import { InputDisplay } from '../InputDisplay'
import { InputRange } from '../InputRange'
import s from './DisplayPassword.module.scss'

export const DisplayPassword = React.memo(() => {

    const dispatch = useDispatch()
    const value = useSelector((state: AppStateType) => state.passwordReducer.inputValue)
    const maxValue = useSelector((state: AppStateType) => state.passwordReducer.maxValue)


    let arr: number[] = []
    for (let i = 0; i < 100; i++) {
        arr.push(i)
    }
    const renderSymbols = useMemo(() => {
        return arr.map((i, idx) => <span key={idx + 1}>{Math.floor(Math.random() * 1000)}</span>)
    }, [arr])

    const onChangeInputRangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueAC(+e.currentTarget.value))
    }, [dispatch])

    const onChangeInputDisplayHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueAC(+e.currentTarget.value))
    }, [dispatch])

    return (
        <div className={s.displaypassword}>
            <div className={s.displaypassword__symbols}>
                {
                    renderSymbols
                }
            </div>
            <div className={s.displaypassword__group}>
                <InputDisplay className={s.displaypassword__inputDisplay} value={value} onChange={onChangeInputDisplayHandler} />
                <InputRange className={s.displaypassword__inputRange} value={value} max={maxValue} onChange={onChangeInputRangeHandler} />
                <Button title={"Copy"} />
                <Button title={"Generator"} />
            </div>
        </div>
    )
})
