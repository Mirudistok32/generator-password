import React from 'react'
import { CheckboxCraft } from '../CheckboxCraft';
import s from './DisplaySettings.module.scss'

export const DisplaySettings = React.memo(() => {

    return (
        <div className={s.displaysettings}>
            <ul className={s['displaysettings__list']}>
                <li className={s.displaysettings__element}>
                    <CheckboxCraft title={'Numbers'} />
                </li>
                <li className={s.displaysettings__element}>
                    <CheckboxCraft title={'Symbols'} />
                </li>
                <li className={s.displaysettings__element}>
                    <CheckboxCraft title={'Letters'} />
                </li>
                <li className={s.displaysettings__element}>
                    <CheckboxCraft title={'Uppercase'} />
                </li>
                <li className={s.displaysettings__element}>
                    <CheckboxCraft title={'Lowercase'} />
                </li>
            </ul>
        </div>
    )
})
