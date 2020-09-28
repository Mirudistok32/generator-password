import React, { ChangeEvent } from 'react'
import s from './InputRange.module.scss'

type PropsType = {
    className?: string
    value: number
    max?: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputRange: React.FC<PropsType> = React.memo((props) => {

    const { className, value, onChange, max = 100 } = props

    const mainStyles = [s.wrap]
    if (className) mainStyles.push(className)

    return (
        <div className={mainStyles.join(" ")}>
            <output className={s.wrap__output} >
                {
                    value
                }
            </output>
            <input
                className={s.input}
                type="range"
                min="0"
                max={max}
                value={value}
                title={value.toString()}
                onChange={onChange}
            />
        </div >

    )
})
