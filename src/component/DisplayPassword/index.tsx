import React, { ChangeEvent, MouseEvent, useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setValueAC } from '../../redux/password-reducer'
import { AppStateType } from '../../redux/store'
import { getRandomOne } from '../../utils/randomFunctions'
import { Button } from '../Button'
import { InputDisplay } from '../InputDisplay'
import { InputRange } from '../InputRange'
import s from './DisplayPassword.module.scss'

export const DisplayPassword = React.memo(() => {

    const dispatch = useDispatch()
    const [rerenderPages, setRerenderPages] = useState(0)
    const value = useSelector((state: AppStateType) => state.passwordReducer.inputValue)
    const maxValue = useSelector((state: AppStateType) => state.passwordReducer.maxValue)
    const data = useSelector((state: AppStateType) => state.passwordReducer.checkBottons)

    let arr: number[] = []
    for (let i = 0; i < value; i++) {
        arr.push(i)
    }
    const renderSymbols = useMemo(() => {
        return arr.map((i, idx) => {
            return <span key={idx + 1}>{getRandomOne(data)}</span>
        })
    }, [arr, data])

    const onChangeInputRangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueAC(+e.currentTarget.value))
    }, [dispatch])

    const onChangeInputDisplayHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value > maxValue) {
            dispatch(setValueAC(maxValue))
        } else {
            dispatch(setValueAC(+e.currentTarget.value))
        }
    }, [dispatch, maxValue])

    const onClickCopyHandler = (e: MouseEvent<HTMLButtonElement>) => { }
    const onClickGeneratorHandler = (e: MouseEvent<HTMLButtonElement>) => { setRerenderPages(rerenderPages + 1) }

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
                <Button title={"Copy"} onClick={onClickCopyHandler} />
                <Button title={"Generator"} onClick={onClickGeneratorHandler} />
            </div>
        </div>
    )
})
