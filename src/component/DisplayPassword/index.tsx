import React from 'react'
import s from './DisplayPassword.module.scss'

export const DisplayPassword = () => {

    let arr = []
    for (let i = 0; i < 107; i++) {
        arr.push(i)
    }
    const renderSymbols = arr.map((i, idx) => <span key={idx + 1}>{Math.floor(Math.random() * 1000)}</span>)


    return (
        <div className={s.displaypassword}>
            {
                renderSymbols
            }
        </div>
    )
}
