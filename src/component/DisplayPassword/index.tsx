import React, { ChangeEvent, MouseEvent, useCallback, useEffect, useMemo } from 'react'
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
    const value = useSelector((state: AppStateType) => state.passwordReducer.inputValue)
    const maxValue = useSelector((state: AppStateType) => state.passwordReducer.maxValue)
    const data = useSelector((state: AppStateType) => state.passwordReducer.checkBottons)

    let arr: number[] = []
    for (let i = 0; i < value; i++) {
        arr.push(i)
    }
    const renderSymbols = useMemo(() => {
        return arr.map((i, idx) => {
            const count = getRandomOne(data);
            return <span key={idx + 1}>{count}</span>
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

    useEffect(() => {
        document.execCommand(value.toString());
    }, [value])

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
                <Button title={"Generator"} />
            </div>
        </div>
    )
})
