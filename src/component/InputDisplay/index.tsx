import React, { ChangeEvent } from 'react'
import s from './InputDisplay.module.scss'

type PropsType = {
    className: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputDisplay: React.FC<PropsType> = React.memo((props) => {

    const { className, onChange, value } = props

    return (
        <input
            className={s.input + `${className ? ' ' + className : ''}`}
            type="text"
            value={value}
            onChange={onChange}
        />
    )
})
