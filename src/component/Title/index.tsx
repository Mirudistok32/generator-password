import React from 'react'
import s from './Title.module.scss'

type PropsType = {
    title: string
}

export const Title: React.FC<PropsType> = (props) => {

    const { title } = props

    return (
        <div className={s.title}>
            {title}
        </div>
    )
}
