import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { CheckboxCraft } from '../CheckboxCraft';
import s from './DisplaySettings.module.scss'

export const DisplaySettings = React.memo(() => {

    const dispatch = useDispatch()
    const isNumbersCheck = useSelector((state: AppStateType) => state.passwordReducer.isNumbersCheck)
    const isLettersCheck = useSelector((state: AppStateType) => state.passwordReducer.isLettersCheck)
    const isSymbolsCheck = useSelector((state: AppStateType) => state.passwordReducer.isSymbolsCheck)
    const isUppercaseCheck = useSelector((state: AppStateType) => state.passwordReducer.isUppercaseCheck)
    const isLowercaseCheck = useSelector((state: AppStateType) => state.passwordReducer.isLowercaseCheck)

    return (
        <div className={s.displaysettings}>
            <ul className={s['displaysettings__list']}>
                <li className={s.displaysettings__element}>
                    <CheckboxCraft title={'Numbers'} disabled={isNumbersCheck} />
                </li>
                <li className={s.displaysettings__element}>
                    <CheckboxCraft title={'Letters'} disabled={isLettersCheck} />
                </li>
                <li className={s.displaysettings__element}>
                    <CheckboxCraft title={'Symbols'} disabled={isSymbolsCheck} />
                </li>
                <li className={s.displaysettings__element}>
                    <CheckboxCraft title={'Uppercase'} disabled={isUppercaseCheck} />
                </li>
                <li className={s.displaysettings__element}>
                    <CheckboxCraft title={'Lowercase'} disabled={isLowercaseCheck} />
                </li>
            </ul>
        </div>
    )
})
