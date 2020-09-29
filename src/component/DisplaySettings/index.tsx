import React from 'react'
import s from './DisplaySettings.module.scss'

export const DisplaySettings = () => {

    console.log(String.fromCharCode(72));
    return (
        <div className={s.displaysettings}>
            <ul className={s['displaysettings__list']}>
                <li className={s.displaysettings__element}>
                    <label className={s['displaysettings__element-box']}>
                        <span className={s.displaysettings__title}>Numbers</span>
                        <input className={s.displaysettings__input} type="checkbox" />
                    </label>
                </li>
                <li className={s.displaysettings__element}>
                    <label className={s['displaysettings__element-box']}>
                        <span className={s.displaysettings__title}>Symbols</span>
                        <input className={s.displaysettings__input} type="checkbox" />
                    </label>
                </li>
                <li className={s.displaysettings__element}>
                    <label className={s['displaysettings__element-box']}>
                        <span className={s.displaysettings__title}>Letters</span>
                        <input className={s.displaysettings__input} type="checkbox" />
                    </label>
                </li>
                <li className={s.displaysettings__element}>
                    <label className={s['displaysettings__element-box']}>
                        <span className={s.displaysettings__title}>Uppercase</span>
                        <input className={s.displaysettings__input} type="checkbox" />
                    </label>
                </li>
                <li className={s.displaysettings__element}>
                    <label className={s['displaysettings__element-box']}>
                        <span className={s.displaysettings__title}>Lowercase</span>
                        <input className={s.displaysettings__input} type="checkbox" />
                    </label>
                </li>
            </ul>
        </div>
    )
}
