import React, { ChangeEvent } from 'react'
import s from './InputRange.module.scss'


const setStyleLeftOutput = (valuedefault: number) => {
    let result = -1
    result = valuedefault + result
    if (valuedefault > 5 && valuedefault <= 10) {
        result = valuedefault - 3
    } else if (valuedefault > 10 && valuedefault <= 30) {
        result = valuedefault - 5
    } else if (valuedefault > 30 && valuedefault <= 50) {
        result = valuedefault - 8
    } else if (valuedefault > 50 && valuedefault <= 75) {
        result = valuedefault - 10
    } else if (valuedefault > 75 && valuedefault <= 91) {
        result = valuedefault - 12
    } else if (valuedefault > 91 && valuedefault <= 107) {
        result = valuedefault - 14
    }
    return result + "%"
}

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
            <output className={s.wrap__output} style={{ left: setStyleLeftOutput(value) }}>
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
