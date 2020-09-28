import React from 'react'
import s from './InputRange.module.scss'

type PropsType = {
    className: string
}

export const InputRange: React.FC<PropsType> = React.memo((props) => {

    const { className } = props

    const mainStyles = [s.input]
    if (className) mainStyles.push(className)

    return (
        <input className={mainStyles.join(' ')} type="range" />
    )
})
