import React, { MouseEvent } from 'react'
import s from './Button.module.scss'

type PropsType = {
    title: string
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<PropsType> = (props) => {

    const { title, children, onClick } = props

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(e)
    }

    return (
        <button
            className={s.btn}
            onClick={(e) => onClickHandler(e)}
        >
            {
                children ? children : title
            }
        </button>
    )
}
