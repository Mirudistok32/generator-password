import React, { ChangeEvent } from 'react'
import s from './CheckboxCraft.module.scss'

type PropsType = {
    className?: string
    title: string
    disabled?: boolean
    checked: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CheckboxCraft: React.FC<PropsType> = React.memo((props) => {

    const { className, title, disabled, checked, onChange } = props

    return (
        <label className={s.checkbox + `${className ? ' ' + className : ''}`}>
            <span className={s.checkbox__title}>{title}</span>
            <input className={s.checkbox__input} type="checkbox" disabled={disabled} checked={checked} onChange={onChange} />
            <span className={s['checkbox__input-craft']}></span>
        </label>
    )
})
