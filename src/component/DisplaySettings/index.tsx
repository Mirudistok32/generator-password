import React, { ChangeEvent, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { CheckboxCraft } from '../CheckboxCraft';
import { setIsCheckedAC } from '../../redux/password-reducer'
import s from './DisplaySettings.module.scss'

export const DisplaySettings = React.memo(() => {

    const dispatch = useDispatch()
    const checkBottons = useSelector((state: AppStateType) => state.passwordReducer.checkBottons)

    const rendercheckBottons = useMemo(() => checkBottons.map(i => {
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setIsCheckedAC({ isChecked: e.currentTarget.checked, id: i.id }))
        }
        return (
            <li
                key={i.id}
                className={s.displaysettings__element}
            >
                <CheckboxCraft
                    className={s.displaysettings__checkbox}
                    title={i.title}
                    checked={i.checked}
                    onChange={onChangeHandler}
                />
            </li>
        )
    }), [checkBottons, dispatch])

    return (
        <div className={s.displaysettings}>
            <ul className={s['displaysettings__list']}>
                {
                    rendercheckBottons
                }
            </ul>
        </div>
    )
})
