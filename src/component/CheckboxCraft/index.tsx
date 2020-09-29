import React from 'react'
import s from './CheckboxCraft.module.scss'

type PropsType = {
    className?: string
    title: string
}

export const CheckboxCraft: React.FC<PropsType> = React.memo((props) => {

    const { className, title } = props

    return (
        <label className={s.checkbox + `${className ? ' ' + className : ''}`}>
            <span className={s.checkbox__title}>{title}</span>
            <input className={s.checkbox__input} type="checkbox" />
        </label>
    )
})
