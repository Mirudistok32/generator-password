import React from 'react'
import { DisplayPassword } from '../DisplayPassword'
import { DisplaySettings } from '../DisplaySettings'
import s from './Boxdisplay.module.scss'

export const Boxdisplay = () => {


    return (
        <div className={s.boxdisplay}>
            <DisplayPassword />
            <DisplaySettings />
        </div>
    )
}
