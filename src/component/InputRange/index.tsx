import React, { ChangeEvent } from 'react'
import s from './InputRange.module.scss'

type PropsType = {
    className: string
    value: number
    max?: number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputRange: React.FC<PropsType> = React.memo((props) => {

    const { className, value , onChange, max = 100 } = props

    const mainStyles = [s.input]
    if (className) mainStyles.push(className)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }

    return (
        <input
            className={mainStyles.join(' ')}
            type="range"
            min="0"
            max={max}
            value={value}
            title={value.toString()}
            onChange={(e) => onChangeHandler(e)}
        />
    )
})
