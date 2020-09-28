import React, { ChangeEvent, useCallback } from 'react'
import { Button } from '../Button'
import { InputRange } from '../InputRange'
import s from './DisplayPassword.module.scss'

export const DisplayPassword = () => {

    let arr = []
    for (let i = 0; i < 100; i++) {
        arr.push(i)
    }
    const renderSymbols = arr.map((i, idx) => <span key={idx + 1}>{Math.floor(Math.random() * 1000)}</span>)

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    }, [])

    return (
        <div className={s.displaypassword}>
            <div className={s.displaypassword__symbols}>
                {
                    renderSymbols
                }
            </div>
            <div className={s.displaypassword__group}>
                <InputRange className={s.displaypassword__input} value={20} max={107} onChange={onChangeHandler} />
                <Button title={"Copy"} />
                <Button title={"Generator"} />
            </div>
        </div>
    )
}
