import React from 'react'
import { Button } from '../Button'
import s from './DisplayPassword.module.scss'

export const DisplayPassword = () => {

    let arr = []
    for (let i = 0; i < 100; i++) {
        arr.push(i)
    }
    const renderSymbols = arr.map((i, idx) => <span key={idx + 1}>{Math.floor(Math.random() * 1000)}</span>)


    return (
        <div className={s.displaypassword}>
            <div className={s.displaypassword__symbols}>
                {
                    renderSymbols
                }
            </div>
            <div className={s.displaypassword__btns}>
                <Button title={"Copy"} />
                <Button title={"Generator"} />
            </div>
        </div>
    )
}
